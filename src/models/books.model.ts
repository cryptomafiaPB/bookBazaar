import { model, Schema } from "mongoose";

export const bookSchema = new Schema({
    title: { type: String, required: true, trim: true, index: true },
    author: { type: String, required: true, trim: true, index: true },
    description: { type: String, trim: true },
    fileUrl: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    genres: [{ type: String, trim: true, index: true }],
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    coverImageUrl: { type: String },
    publishedAt: { type: Date }
}, { timestamps: true });

export const Book = model('Book', bookSchema);