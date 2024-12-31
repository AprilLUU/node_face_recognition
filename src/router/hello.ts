import express from "express"

const router = express.Router()

router.get("/", (req: any, res: any, next: any) => {
  res.end("hello client")
})

export default router