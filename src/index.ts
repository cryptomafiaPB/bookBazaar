import app from "./app";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { PORT } from "./utils/envLoader";
import { connectDB } from "./db/connectDB";
import { errorHandler } from "./middlewares/error.middleware";

// internal Route Imports
import authRoutes from "./routes/auth.route";
import bookRoutes from "./routes/book.route";
import orderRoutes from "./routes/order.route";
import paymentRoutes from "./routes/payment.route";

const port = PORT || 5000

connectDB();

// config middlewares
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// ROUTES

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/books", bookRoutes)
app.use("/api/v1/orders", orderRoutes)
app.use("/api/v1/payments", paymentRoutes)

app.get("/api/v1/healthCheck", (req, res) => {
    res.send("OK");
});


app.use(errorHandler as any);


app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});