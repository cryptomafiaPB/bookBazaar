import { CartItem } from "../models/cart.model";
import { ApiError } from "../utils/api-error";
import { Book } from "../models/books.model";
import { Order } from "../models/order.model";
import { OrderStatusEnum, PaymentCurrencyEnum, PaymentStatusEnum } from "../utils/constant";
import Razorpay from "razorpay"
import { Payment } from "../models/payment.model";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});


export class OrderService {
    static async createOrder(userId: string, cartItems?: { book_id: string; quantity: number; unitPrice: number }[]
    ) {
        if (!cartItems) {
            const items = await CartItem.find({ user_id: userId }).populate<{ book_id: typeof Book & { _id: any, price: number } }>("book_id")
            if (!items.length) throw new ApiError(400, "Cart is empty");
            cartItems = items.map(ci => ({ book_id: ci.book_id._id.toString(), quantity: ci.quantity, unitPrice: ci.book_id.price }));

            // remove cart
            await CartItem.deleteMany({ user_id: userId })
        }

        //  Calculate total amount
        const totalAmount = cartItems.reduce((total, i) => total + i.unitPrice * i.quantity, (0))

        // create order document
        const order = await Order.create({ user_id: userId, cartItems, totalAmount, status: OrderStatusEnum.PENDING, items: cartItems.map(ci => ({ book_id: ci.book_id, quantity: ci.quantity, unitPrice: ci.unitPrice })) });

        return order
    }

    static async createPayment(orderId: string) {
        const order = await Order.findById(orderId)
        if (!order) throw new ApiError(404, "Order not found");

        if (order.status !== OrderStatusEnum.PENDING) throw new ApiError(400, "Order is not pending");

        const options = {
            amount: order.totalAmount * 100, // in paise
            currency: PaymentCurrencyEnum.INR,
            receipt: order._id.toString(),
            payment_capture: 1,
        };

        const paymentDetailes = await razorpay.orders.create(options);

        const payment = await Payment.create({
            order_id: order._id,
            paymentGateway: "razorpay",
            paymentId: paymentDetailes.id,
            amount: order.totalAmount,
            currency: PaymentCurrencyEnum.INR,
            status: PaymentStatusEnum.CREATED,
            meta: paymentDetailes
        })

        return { paymentDetailes, payment }
    }

    static async verifyPayment(payload: any, signature: string) {
        console.log("Inside verify , payload: ", payload);
        const expected = Razorpay.validateWebhookSignature(
            JSON.stringify(payload),
            process.env.RAZORPAY_WEBHOOK_SECRET!,
            signature
        );
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = payload.payload.payment.entity;
        console.log("Expected: ", expected)
        if (!expected) throw new ApiError(400, 'Invalid signature');

        // update payment record
        const payment = await Payment.findOne({ paymentId: razorpay_order_id });
        if (!payment) throw new ApiError(404, 'Payment record not found');
        payment.status = PaymentStatusEnum.SUCCESSFUL;
        await payment.save();

        // update order status
        await Order.findByIdAndUpdate(payment.order_id, { status: OrderStatusEnum.PAID });
        console.log("Payment verified");
        return payment;
    }
}