import express from "express";
import connectDb from "./config/db.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/", userRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
