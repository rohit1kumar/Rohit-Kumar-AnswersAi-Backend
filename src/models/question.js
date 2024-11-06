import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import User from "./user.js";

const Question = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "questions",
    timestamps: true,
    underscored: true,
  },
);

export default Question;
