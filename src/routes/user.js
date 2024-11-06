import express from "express";
import { getUserById, addUser, getQuestionsByUser } from "../controllers/user.js";
import { checkAuthentication } from "../middleware/auth.js";
import { validateUser } from "../middleware/validator.js";

const router = express.Router();

router.post("/", validateUser, addUser);
router.get("/:id", checkAuthentication, getUserById);
router.get("/:id/questions", checkAuthentication, getQuestionsByUser);

export default router;
