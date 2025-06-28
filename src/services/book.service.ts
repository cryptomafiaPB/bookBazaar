import cloudinary from "../config/cloudinary";
import { Book } from "../models/books.model";
import { ApiError } from "../utils/api-error";
import { AddBookInput, AddBookInterface } from "../validators/book";


function uploadToCloudinary(buffer: Buffer, options: any): Promise<any> {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
        stream.end(buffer);
    });
}


export class BookService {

    static async addBook(input: AddBookInput, file: any, coverImage: any) {

        const { title, author, description, isbn, genres, price, stock, publishedAt } = input as AddBookInterface

        // Upload file (PDF) to Cloudinary
        const fileResult = await uploadToCloudinary(file.buffer, { resource_type: 'raw' });

        // Upload cover image to Cloudinary
        const coverResult = await uploadToCloudinary(coverImage.buffer, { resource_type: 'image' });

        // Create book in DB
        const book = await Book.create({
            title,
            author,
            description,
            isbn,
            genres,
            price,
            stock,
            publishedAt,
            coverImageUrl: coverResult.secure_url,
            fileUrl: fileResult.secure_url
        });

        return book

    }
}