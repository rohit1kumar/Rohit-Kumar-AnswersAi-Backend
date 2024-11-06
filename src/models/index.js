import User from "./user.js";
import Question from "./question.js";

User.hasMany(Question, { foreignKey: "user_id" });
Question.belongsTo(User, { foreignKey: "user_id" });

export { User, Question };
