import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: console.log,
});

export default sequelize;
