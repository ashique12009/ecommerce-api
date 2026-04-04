import express from "express";
import router from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API");
});

app.use("/api/auth", router);
app.use("/api", productRouter);

export default app;