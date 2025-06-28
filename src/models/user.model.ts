import { model, Schema } from "mongoose";
import { AvailableRoles, UserRoleEnum } from "../utils/constant";
import bcrypt from "bcryptjs"

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: AvailableRoles,
        default: UserRoleEnum.USER
    },
    isActive: {
        type: Boolean,
        default: true,
        index: true
    }
}, { timestamps: true })

// create pre-hook, check save operation on password field, hash password

userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

export const User = model('User', userSchema)