import { User } from "../models/user.model";
import { ApiError } from "../utils/api-error";
import { JWT_EXPIRE, JWT_SECRET } from "../utils/envLoader";
import { LoginInput, RegisterInput, ReqUserInput } from "../validators/auth";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import { ApiKey } from "../models/api_keys.model";


export class AuthService {
    static async register(input: RegisterInput) {
        // extract data
        const { name, email, password, role } = input

        // check if user already exists
        console.log("inside Register: ", email)
        const isExist = await User.findOne({ email })

        if (isExist) {
            throw new ApiError(409, "Email already in use")
        }

        // create new user
        const user = await User.create({ name, email, password, role })

        // create new user Object with password field undefined

        const userWithoutSensitiveData = {
            ...user.toObject(),
            password: undefined
        }

        // return user
        return userWithoutSensitiveData
    }

    static async login(input: LoginInput) {
        // Extract data
        const { email, password } = input

        // Get user based on email
        console.log(email)
        const user = await User.findOne({ email })

        if (!user) {
            throw new ApiError(400, "Incorrect credentials")
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new ApiError(400, "Incorrect credentials")
        }

        // Create jwt token with payload
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET!, {
            expiresIn: "1d"
        })

        // 
        const userWithoutSensitiveData = {
            ...user.toObject(),
            password: undefined
        }

        return { userWithoutSensitiveData, token }
    }

    static async getMe(input: ReqUserInput) {
        // get user id from req.user
        const { id, role } = input

        // get user based on id
        const user = await User.findById(id)

        if (!user) {
            throw new ApiError(404, "User not found")
        }

        const userWithoutSensitiveData = {
            ...user.toObject(),
            password: undefined
        }

        return { userWithoutSensitiveData }
    }

    static async apiKey(input: ReqUserInput) {
        // Expract data
        const { id, role } = input

        // generate API key
        const apiKey = await crypto.randomBytes(32).toString("hex");

        // create new API key
        const apiKeyObj = await ApiKey.create({ key: apiKey, user_id: id })

        if (!apiKeyObj) {
            throw new ApiError(500, "Something went wrong while creating API key")
        }
        // return API key
        return apiKey
    }
}