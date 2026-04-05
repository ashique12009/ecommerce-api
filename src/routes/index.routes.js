import { Router } from "express";
import authRoutes from "./auth.routes.js";
import productRoutes from "./product.routes.js";

const router = Router();

// Auth routes
router.use("/auth", authRoutes);

// Protected routes
router.use("/api", productRoutes);

export default router;