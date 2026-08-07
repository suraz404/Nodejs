import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Yoalalalala");
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
