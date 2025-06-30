import Router from "express"
import { authMiddleware } from "../middlewares/auth.middleware"
import { PaymentsController } from "../controllers/payments.controller"
import { asyncHandler } from "../utils/asyncHandler"

const router = Router()

router.route("/create").post(authMiddleware, asyncHandler(PaymentsController.create))

router.route("/verify").post(asyncHandler(PaymentsController.verify))

export default router