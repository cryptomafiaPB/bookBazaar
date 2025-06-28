import { model, Schema } from "mongoose";
import { AvailablePaymentCurrency, AvailablePaymentStatus, PaymentCurrencyEnum, PaymentStatusEnum } from "../utils/constant";

export const paymentSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true, index: true },
    paymentGateway: { type: String, required: true },
    paymentId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    currency: {
        type: String,
        enum: AvailablePaymentCurrency,
        default: PaymentCurrencyEnum.INR
    },
    status: {
        type: String,
        enum: AvailablePaymentStatus,
        default: PaymentStatusEnum.CREATED,
        index: true
    },
    meta: { type: Schema.Types.Mixed }
})

export const Payment = model('Payment', paymentSchema);