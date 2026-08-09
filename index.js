import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Yoalalalala");
});
app.post("/", (req, res) => {
  let body = req.body;
  res.send("hello");
});

const users = [
  { id: 1, name: "Suraj", age: 20 },
  { id: 2, name: "Aayush", age: 21 },
  { id: 3, name: "Rohan", age: 19 },
  { id: 4, name: "Sujan", age: 22 },
  { id: 5, name: "Anish", age: 20 },
];

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  // Handle invalid IDs like /users/abc
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid user ID",
    });
  }

  const existingUser = users.find((user) => user.id === id);

  if (!existingUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(existingUser);
});

//req.query
app.get("/search", (req, res) => {
  let query = req.query;
  res.json(query);
});
app.listen(3000, () => {
  console.log("Server is started on port 3000");
});

app.listen(3000, () => {
  console.log("Server is started");
});

// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("Welcome to home");
//   } else if (req.url == "/about") {
//     res.end("Welcome to About");
//   } else {
//     res.end("Error 404");
//   }
//   res.end("Server Detected");
// });
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
