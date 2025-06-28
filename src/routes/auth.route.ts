import Router from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthMiddleware, authMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// No Authorization required || PUBLIC
router.route("/register").post(asyncHandler(AuthController.register));
router.route("/login").post(asyncHandler(AuthController.login));


router.route("/api-key").get(AuthMiddleware.authJWT, asyncHandler(AuthController.generateApiKey));  // Only JWT Authorization required

router.route("/me").get(authMiddleware, asyncHandler(AuthController.me)); //  JWT & API Authorization required

export default router;
