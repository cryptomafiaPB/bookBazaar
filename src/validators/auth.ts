import { z } from "zod/v4";
import { AvailableRoles } from "../utils/constant";

export const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters").max(50, "Password must be at most 50 characters"),
    role: z.enum(AvailableRoles),
})

export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters").max(50, "Password must be at most 50 characters"),
})


export const reqUserSchema = z.object({
    id: z.string(),
    role: z.enum(AvailableRoles),
})

export type ReqUserInput = z.infer<typeof reqUserSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;