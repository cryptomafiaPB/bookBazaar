import { Router } from "express";
import { adminMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { BookController } from "../controllers/book.controller";
import { uploadFields } from "../middlewares/upload.middleware";

const router = Router();

router.route("/").post(adminMiddleware, uploadFields, asyncHandler(BookController.create));

export default router;