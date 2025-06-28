import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-error";
import { Book } from "../models/books.model";
import { ApiResponse } from "../utils/api-responce";
import { BookService } from "../services/book.service";





export class BookController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            // extract data JSON
            let bookData = req.body;
            if (typeof req.body.bookDetails === "string") {
                bookData = JSON.parse(req.body.bookDetails);
            }

            // Extract file and coverImage

            if (!req.files) throw new ApiError(400, 'File and CoverImage are required');


            const file = req.files && (req.files as any).file?.[0];
            const cover = req.files && (req.files as any).coverImage?.[0];

            if (!file || !cover) throw new ApiError(400, 'File and CoverImage are required');

            const book = await BookService.addBook(bookData, file, cover);

            return res.status(201).json(new ApiResponse(201, { book }, "Book created successfully"));

        } catch (error) {
            next(error)
        }
    }
}