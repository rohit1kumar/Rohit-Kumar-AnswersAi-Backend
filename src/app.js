import express from "express";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.get("/healthz", (req, res) => {
  console.log("health check passed");
  res.send("ok");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

export default app;
