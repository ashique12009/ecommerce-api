import express from "express";
import routes from "./routes/index.routes.js";
import compression from "compression";
const app = express();

app.use(compression());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API");
});

app.use(routes);

export default app;