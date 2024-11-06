import { login } from "../controllers/user.js";
import { validateLogin } from "../middleware/validator.js";
import express from "express";

const router = express.Router();

router.post("/login", validateLogin, login);

export default router;
