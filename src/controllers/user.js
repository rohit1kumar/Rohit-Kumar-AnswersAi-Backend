import { User } from "../models/index.js";
import { getHashedPassword, getToken, validatePassword } from "../utils/index.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(409).json({
            details: "Email already in use",
        });
    }
    const hashedPassword = await getHashedPassword(password);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = getToken(user.id);

    return res.status(201).json({
        id: user.id,
        token,
    });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({
            details: "Invalid credentials",
        });
    }

    const isPasswordValid = await validatePassword(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            details: "Invalid credentials",
        });
    }

    const token = getToken(user.id);
    return res.json({ token });
};
