import { addQuestion, getQuestionById } from "../controllers/question.js";
import { validateQuestionSchema } from "../middleware/validator.js";
import { checkAuthentication } from "../middleware/auth.js";

import express from "express";

const router = express.Router();

router.post("/", validateQuestionSchema, checkAuthentication, addQuestion);
router.get("/:id", checkAuthentication, getQuestionById);

export default router;
