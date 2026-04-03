const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API");
});

// app.use("/api/auth", require("./routes/auth.routes"));

module.exports = app;