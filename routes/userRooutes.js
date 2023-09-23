import express from "express"
import { getAllUser, signUp } from "../controllers/userControoller.js"

const router = express.Router()

router.get('/', getAllUser)
router.post('/signUp', signUp)
export default router