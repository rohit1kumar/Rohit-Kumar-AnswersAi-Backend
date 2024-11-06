import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
dotenv.config();

export const checkAuthetication = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res.status(403).json({
      detail: "Token is required",
    });

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err)
      return res.status(401).json({
        detail: "Invalid or expired token",
      });
    const user = await User.findById(payload.id);
    req.user = user;
    next();
  });
};
