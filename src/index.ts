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

const port = PORT || 5000

connectDB();

// config middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// ROUTES

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/me", bookRoutes)

app.get("/api/v1/healthCheck", (req, res) => {
    res.send("OK");
});


app.use(errorHandler as any);


app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});