import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import productController from "../controllers/product.controller.js";

const router = Router();

// Protected routes
router.get("/products", authMiddleware, productController.getProducts);

export default router;
