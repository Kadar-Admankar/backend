import express from "express"
import { getAllUser } from "../controllers/userControoller.js"

const router = express.Router()

router.get('/', getAllUser)

export default router