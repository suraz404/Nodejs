import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
const PORT = 8100;

const app = express();
const url = process.env.URL;

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db connected");
  } catch (error) {
    console.log("error", error);
  }
};

app.get("/", (req, res) => {
  res.send({ sucess: true });
});

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running");
});
