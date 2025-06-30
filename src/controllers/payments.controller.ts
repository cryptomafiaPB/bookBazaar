import { NextFunction, Request, Response } from "express";
import { OrderService } from "../services/order.service";
import { ApiResponse } from "../utils/api-responce";

export class PaymentsController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { orderId } = req.body
            const { payment, paymentDetailes } = await OrderService.createPayment(orderId)

            return res.status(201).json(new ApiResponse(201, { payment, paymentDetailes }, "Payment initiated"));
        } catch (error) {
            next(error)
        }
    }

    static async verify(req: Request, res: Response, next: NextFunction) {
        try {
            const signature = req.headers['x-razorpay-signature'] as string
            const payment = await OrderService.verifyPayment(req.body, signature)

            return res.status(200).json({ status: "OK" });
        } catch (error) {
            next(error)
        }
    }
}