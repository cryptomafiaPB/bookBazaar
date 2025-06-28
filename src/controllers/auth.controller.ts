import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { ApiResponse } from "../utils/api-responce";

export class AuthController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await AuthService.register(req.body);

            return res.status(201).json(new ApiResponse(201, { user }, "Registered successfully"));
        } catch (error) {
            next(error);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { userWithoutSensitiveData, token } = await AuthService.login(req.body)

            // set cookie

            const cookieOptions = {
                httpOnly: true,
                secure: false, // in production set true
                sameSite: "lax" as const, // helps with CSRF and cross-site sending
                maxAge: 24 * 60 * 60 * 1000, // 1d in milliseconds
            }


            return res
                .cookie("id", token, cookieOptions)
                .status(200).json(new ApiResponse(200, { user: userWithoutSensitiveData, token }, "Login successfully"));
        } catch (error) {
            next(error)
        }
    }

    static async generateApiKey(req: Request, res: Response, next: NextFunction) {
        try {
            const apiKey = await AuthService.apiKey(req.user!);

            return res.status(200).json(new ApiResponse(200, { apiKey }, "API key generated successfully"));

        } catch (error) {
            next(error)
        }
    }

    static async me(req: Request, res: Response, next: NextFunction) {
        try {
            const { userWithoutSensitiveData } = await AuthService.getMe(req.user!);

            return res.status(200).json(new ApiResponse(200, userWithoutSensitiveData, "Success"));
        } catch (error) {
            next(error)
        }
    }
}