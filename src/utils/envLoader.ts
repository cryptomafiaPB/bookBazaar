import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const { PORT, MONGO_URL, JWT_SECRET, JWT_EXPIRE,
    CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;