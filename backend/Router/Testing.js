import express from "express"
import { protect } from "../Middleware/Token.js"
import Login from "../Controller/Login.js"

const router=express.Router()

const middleware=[protect]

router.post("/login",Login)

export default router
