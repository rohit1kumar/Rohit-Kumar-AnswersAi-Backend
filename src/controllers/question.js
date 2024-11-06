import { Question } from "../models/index.js";
import AI from "../utils/ai.js";
export const addQuestion = async (req, res, next) => {
  try {
    const { content } = req.body;
    const question = await Question.create({ content, user_id: req.user.id });
    const ai = new AI();
    question.answer = await ai.generateAnswer(content);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    next(err);
  }
};

export const getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findByPk(req.params.id);
    if (!question)
      return res.status(404).json({ details: "Question not found" });
    return res.status(200).json(question);
  } catch (err) {
    next(err);
  }
};
