import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import quoteRouter from "./routers/quotes/quotesController";
import mongoose from "mongoose";
import connectDB from "./db/dbConnect";

dotenv.config();

const app = express();
connectDB();
const port: number = 3000;

app.use(cors());
app.use(express.json());
app.use("/quotes", quoteRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
