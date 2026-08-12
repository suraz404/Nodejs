import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;
app.use(cors());
app.get("/", (req, res) => {
  res.json({ name: "Ayush", age: 21 });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
