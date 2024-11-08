import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
dotenv.config();

export const checkAuthentication = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(403).json({
      detail: "Token is required",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({
        detail: "Invalid or expired token",
      });
    }
    const user = await User.findByPk(payload.id);
    if (!user) {
      console.log("No user found with token");
      return res.status(404).json({
        detail: "Corrupt token, get a new one",
      });
    }
    req.user = user;
    next();
  });
};
