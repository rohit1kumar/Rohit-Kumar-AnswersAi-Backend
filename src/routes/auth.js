import { login } from "../controllers/user.js";
import { validateLoginSchema } from "../middleware/validator.js";
import express from "express";

const router = express.Router();

router.post("/login", validateLoginSchema, login);

export default router;
