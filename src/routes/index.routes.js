import { Router } from "express";
import authRoutes from "./auth.routes.js";
import productRoutes from "./product.routes.js";
import publicProductRoutes from "./public.products.routes.js";

const router = Router();

// Auth routes
router.use("/auth", authRoutes);

// Protected routes
router.use("/api", productRoutes);

// Public routes
router.use("/", publicProductRoutes);

export default router;