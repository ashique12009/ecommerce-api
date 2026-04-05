import { Router } from "express";
import publicProductController from "../controllers/public.product.controller.js";

const router = Router();

// Public routes
router.get("/products", publicProductController.getProducts);

export default router;