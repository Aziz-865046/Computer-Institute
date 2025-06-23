import express from "express";
import userRoutes from "./routes/userRoutes.js";
import studRoutes from "./routes/studRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/stud", studRoutes);
