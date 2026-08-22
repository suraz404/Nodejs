import express from "express";

import { User } from "./models/user.model.js";
import connectDb from "./config/db.js";
const app = express();
app.use(express.json());

const Port = process.env.PORT;

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

app.listen(Port, () => {
  connectDb();
  console.log("Server is running");
});
