import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import authController from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected route
router.get("/me", authMiddleware, authController.getMe);

export default router;
