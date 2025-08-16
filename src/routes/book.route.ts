import { Router } from "express";
import { adminMiddleware, authMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { BookController } from "../controllers/book.controller";
import { uploadFields } from "../middlewares/upload.middleware";

const router = Router();

router.route("/").post(adminMiddleware, uploadFields, asyncHandler(BookController.create));
router.route("/").get(authMiddleware, asyncHandler(BookController.list));
router.route("/:id").get(authMiddleware, asyncHandler(BookController.getById));

export default router;