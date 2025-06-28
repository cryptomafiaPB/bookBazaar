import mongoose from "mongoose";
import { MONGO_URL } from "../utils/envLoader";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL!);
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};