import Router from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { OrderController } from "../controllers/order.controller";

const router = Router()


router.route("/").post(authMiddleware, asyncHandler(OrderController.place))

router.route("/").get(authMiddleware, asyncHandler(OrderController.list))

router.route("/:id").get(authMiddleware, asyncHandler(OrderController.listById))


export default router