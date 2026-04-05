import express from "express";
import routes from "./routes/index.routes.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API");
});

app.use(routes);

export default app;