import multer from "multer";
import { ApiError } from "../utils/api-error";

const storage = multer.memoryStorage();

const fileFilter = (field: string) => {
    return (_: any, file: Express.Multer.File, cb: any) => {
        console.log("Field: => ", field, " File: => ", file);
        if (field === "file") {
            // allow pdf only
            if (file.mimetype !== "application/pdf") {
                return cb(new ApiError(400, 'Only PDF files are allowed'), false);
            }
        } else if (field === "coverImage") {
            // allow jpeg/png
            if (!['image/jpeg', 'image/png'].includes(file.mimetype)) {
                return cb(new ApiError(400, 'Only JPEG/PNG images are allowed'), false);
            }
        }
        cb(null, true);
    }
}


export const uploadFields = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
}).fields([
    { name: 'file', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 },
]);