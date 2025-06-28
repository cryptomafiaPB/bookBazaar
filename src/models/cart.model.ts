import { model, Schema } from "mongoose";

export const cartItemSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true, min: 1 }
}, { timestamps: true });

cartItemSchema.index({ user: 1, book: 1 }, { unique: true });

export const CartItem = model('CartItem', cartItemSchema);