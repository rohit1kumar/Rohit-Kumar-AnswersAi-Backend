import { register, login } from "../controllers/user.js"
import { validateRegister, validateLogin } from "../middleware/validator.js"
import express from "express"

const router = express.Router()

router.post("/register", validateRegister, register)
router.post("/login", validateLogin, login)

export default router
