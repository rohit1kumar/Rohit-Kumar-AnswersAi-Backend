import express from "express";
import {
  getUserById,
  addUser,
  getQuestionsByUser,
} from "../controllers/user.js";
import { checkAuthentication } from "../middleware/auth.js";
import { validateUserSchema } from "../middleware/validator.js";

const router = express.Router();

router.post("/", validateUserSchema, addUser);
router.get("/:id", checkAuthentication, getUserById);
router.get("/:id/questions", checkAuthentication, getQuestionsByUser);

export default router;
