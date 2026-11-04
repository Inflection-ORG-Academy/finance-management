import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";
import cors from "cors";

import { checkToken } from "./middleware/authMiddleware.js";
import { login, signup } from "./controller/user.js";
import { createExpense } from "./controller/expense.js";

const app = express();

// All application middleware goes here
app.use(express.json()); // Converting req into standard JS Object
app.use(cors());

// Database Connection
const connectDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected!!!");
  } catch (err) {
    console.log("Database error", err);
    process.exit(1);
  }
};

connectDB();

app.post("/auth/signup", signup);

app.post("/auth/login", login);

app.post("/expenses/create", checkToken, createExpense);

app.listen(5000, "127.0.0.1", () => {
  console.log("server is runing...");
});
