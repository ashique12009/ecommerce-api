import express from "express";
import router from "./routes/auth.routes.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API");
});

app.use("/api/auth", router);

export default app;