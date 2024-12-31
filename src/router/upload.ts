import express from "express"

import uploadController from "../controller/uploadController"
import uploadMiddleware from "../middleware/fileMiddleware"

const router = express.Router()

router.post(
  "/",
  uploadController.createDir,
  uploadMiddleware,
  uploadController.uploadFile
)

export default router
