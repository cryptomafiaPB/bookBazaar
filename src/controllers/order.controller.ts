import { NextFunction, Request, Response } from "express";
import { OrderService } from "../services/order.service"
import { ApiResponse } from "../utils/api-responce";

export class OrderController {
    static async place(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id
            const { items } = req.body

            const order = await OrderService.createOrder(userId, items)

            return res.status(201).json(new ApiResponse(201, { order }, "Order created successfully"))
        } catch (error) {
            next(error)
        }
    }

    static async list(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }

    static async listById(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }
}