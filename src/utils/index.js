import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getHashedPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

export const validatePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

export const getToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "10d",
    });
}
