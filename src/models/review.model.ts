import { model, Schema } from "mongoose";

export const reviewSchema = new Schema({
    book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true, index: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    text: { type: String, trim: true, maxlength: 1000 }
})

export const Review = model('Review', reviewSchema);