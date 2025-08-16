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
    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            // pagination 
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;

            const books = await BookService.listBooks(page, limit);

            return res.status(200).json(new ApiResponse(200, { books }, "Success"));
        } catch (error) {
            next(error)
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const book = await BookService.getBookById(id);
            return res.status(200).json(new ApiResponse(200, { book }, "Success"));
        } catch (error) {
            next(error)
        }
    }
}