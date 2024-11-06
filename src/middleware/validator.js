import Joi from "joi";

const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ details: error.details });
  }
  next();
};

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const questionSchema = Joi.object({
  content: Joi.string().required(),
});

export const validateUserSchema = validateRequest(userSchema);
export const validateLoginSchema = validateRequest(loginSchema);
export const validateQuestionSchema = validateRequest(questionSchema);
