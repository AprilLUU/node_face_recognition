import express from "express"
import detectController from "../controller/detectController"

const router = express.Router()

router.get("/", detectController.faceDetect)

export default router
