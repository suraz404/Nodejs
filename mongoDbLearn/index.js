import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { User } from "./models/user.model.js";
const PORT = 8100;

const app = express();
app.use(express.json());
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
app.post("/create", async (req, res) => {
  try {
    let { name, age, email } = req.body;
    const newUser = await User.create({
      name,
      age,
      email,
    });
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    res.status(400).json({ error });
  }
  app.post("/create/:name", async (req, res) => {
    const userSelect = await User.findOne({ name: req.params.name });
    return res.json({ userSelect });
  });
  app.put("/update", async (req, res) => {
    try {
      let { name, age, email } = req.body;
      let user = await User.updateOne({ email }, { name, age });
      res.json(user);
    } catch (error) {
      res.json({ message: error });
    }
  });
});
app.delete("/delete", async (req, res) => {
  try {
    let { name } = req.body;
    let user = await User.delete({ name });
    res.json({ user });
  } catch (error) {}
});

app.listen(PORT, () => {
  connectDb();
  console.log("Server is running");
});
