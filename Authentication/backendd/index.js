import express from "express";
import "dotenv/config";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api", authRouter);

app.listen(PORT, (req, res) => {
  connectDb();
  console.log("Server iis running");
});
