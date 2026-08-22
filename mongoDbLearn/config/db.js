import "dotenv/config";
import mongoose from "mongoose";
const url = process.env.URL;
const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db connected");
  } catch (error) {
    console.log("error", error);
  }
};

export default connectDb;
