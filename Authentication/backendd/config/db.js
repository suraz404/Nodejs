import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Db connected");
  } catch (error) {
    console.log("Connection failed", error);
  }
};

export default connectDb;
