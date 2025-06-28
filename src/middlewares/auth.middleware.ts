import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-error";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../utils/envLoader";
import { ApiKey } from "../models/api_keys.model";
import { UserRoleEnum } from "../utils/constant";

// Extend Express Request interface to include 'user'
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: string;
            };
        }
    }
}


export class AuthMiddleware {
    static async authJWT(req: Request, res: Response, next: NextFunction) {
        try {
            // Extract JWT from Bearear token or cookie
            const token = req.headers.authorization?.replace("Bearer ", "") ?? req.cookies?.id

            if (!token) {
                throw new ApiError(400, "Unauthorized (!JWT)")
            }

            // Extract payload from JWT token
            const payload = jwt.verify(token, JWT_SECRET!, {
                algorithms: ["HS256"],
            })

            // add payload to req.user
            req.user = { id: (payload as any).id, role: (payload as any).role }
        } catch (error) {
            next(error)
        }
        next()
    }

    static async authAPI(req: Request, res: Response, next: NextFunction) {
        try {
            // Extract API-Key from header
            const key = req.headers["x-api-key"]

            if (!key) {
                throw new ApiError(400, "Unauthorized (!API-KEY)")
            }

            const user = await ApiKey.findOne({
                key,
                revoked: false,
                expiresAt: { $gt: new Date() }
            }).populate<{ user_id: { _id: any; role: string } }>("user_id");

            if (!user) {
                throw new ApiError(400, "Unauthorized (!API-KEY)")
            }

            // add payload to req.user
            req.user = { id: user.user_id._id.toString(), role: user.user_id.role }
        } catch (error) {
            next(error)
        }
        next()
    }

    static async isAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.user?.role !== UserRoleEnum.ADMIN) {
                throw new ApiError(403, "Forbidden (!ADMIN)")
            }
        } catch (error) {
            next(error)
        }
        next()
    }
}

export const authMiddleware = [AuthMiddleware.authJWT, AuthMiddleware.authAPI];

export const adminMiddleware = [AuthMiddleware.authJWT, AuthMiddleware.authAPI, AuthMiddleware.isAdmin];