import { Question } from "../models/index.js";

export const addQuestion = async (req, res) => {
  const { content } = req.body;
  const question = await Question.create({ content, user_id: req.user.id });
  question.answer = "ai answer"; // TODO: change to actual AI answer
  await question.save();
  res.status(201).json(question);
};

export const getQuestionById = async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  if (!question) return res.status(404).json({ details: "Question not found" });
  return res.status(200).json(question);
};
