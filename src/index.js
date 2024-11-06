import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./db/index.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
    await sequelize.sync();
    console.log("All models synced");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();
