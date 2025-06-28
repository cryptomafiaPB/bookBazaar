import { z } from "zod/v4";

export const addBookSchema = ({
    title: z.string().min(2, "Title must be at least 2 characters").max(50, "Title must be at most 50 characters"),
    author: z.string().min(2, "Author must be at least 2 characters").max(50, "Author must be at most 50 characters"),
    description: z.string().min(2, "Description must be at least 2 characters").max(1000, "Description must be at most 1000 characters"),
    isbn: z.string().min(2, "ISBN must be at least 2 characters").max(50, "ISBN must be at most 50 characters"),
    genres: z.array(z.string().min(2, "Genre must be at least 2 characters").max(50, "Genre must be at most 50 characters")).min(1, "At least one genre is required"),
    price: z.number().min(0, "Price must be at least 0").max(9999, "Price must be at most 9999"),
    stock: z.number().min(0, "Stock must be at least 0").max(9999, "Stock must be at most 9999"),
    publishedAt: z.date().optional()
})

export type AddBookInput = z.infer<typeof addBookSchema>;

// Interfaces

export interface AddBookInterface {
    title: string;
    author: string;
    description: string;
    isbn: string;
    genres: string[];
    price: number;
    stock: number;
    publishedAt: Date;
}