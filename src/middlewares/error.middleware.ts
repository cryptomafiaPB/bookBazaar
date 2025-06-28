import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import mongoose from "mongoose";
import { ApiError } from "../utils/api-error";
import multer from "multer";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {

    // Multer file upload errors
    if (err instanceof multer.MulterError) {
        let message = "File upload error";
        if (err.code === "LIMIT_FILE_SIZE") {
            message = "File too large. Max size is 20MB.";
        }
        return res.status(400).json({
            statusCode: 400,
            message,
            success: false,
            status: "error",
            details: err.message,
        });
    }

    // Zod validation error
    if (err instanceof ZodError) {
        return res.status(400).json({
            statusCode: 400,
            message: "Validation Error",
            success: false,
            status: "error",
            details: err.errors,
        });
    }

    // Mongoose validation error
    if (err instanceof mongoose.Error.ValidationError) {
        const messages = Object.values(err.errors).map((e: any) => e.message);
        return res.status(400).json({
            statusCode: 400,
            message: "Database Validation Error",
            success: false,
            status: "error",
            details: messages,
        });
    }

    // Mongoose duplicate key error
    if (
        err instanceof mongoose.Error &&
        (err as any).code === 11000
    ) {
        const keyValue = (err as any).keyValue || {};
        const field = Object.keys(keyValue)[0];
        return res.status(409).json({
            statusCode: 409,
            message: `Duplicate field: ${field}`,
            success: false,
            status: "error",
            details: keyValue,
        });
    }

    // Custom ApiError
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message,
            success: false,
            status: "error",
            details: err.error || undefined,
        });
    }

    // Fallback for all other errors
    return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
        success: false,
        status: "error",
        details: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
}
