import { model, Schema } from "mongoose";
import { AvailableOrderStatus, OrderStatusEnum } from "../utils/constant";

export const orderItemSchema = new Schema({
    book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true }
}, { _id: false });

export const orderSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    items: { type: [orderItemSchema], required: true },
    totalAmount: { type: Number, required: true, min: 0 },
    status: {
        type: String,
        enum: AvailableOrderStatus,
        default: OrderStatusEnum.PENDING,
        index: true
    }
}, { timestamps: true });

export const Order = model('Order', orderSchema);