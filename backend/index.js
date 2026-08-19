import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

let password = "1234";

app.use(cors());
app.use(express.json()); // 👈 Parse JSON body

app.get("/", (req, res) => {
  res.json({ name: "Ayush", age: 21 });
});

app.use((req, res, next) => {
  if (req.body.pass != password) {
    return res.send("Password don't match");
  }

  next(); // 👈 Continue to the next middleware/route
});

app.post("/", (req, res) => {
  res.json({ sucess: true });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
