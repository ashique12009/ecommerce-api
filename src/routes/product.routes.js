import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import productController from "../controllers/product.controller.js";

const productRouter = Router();

// Protected routes
productRouter.get("/products", authMiddleware, productController.getProducts);

export default productRouter;
