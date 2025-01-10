import express from "express"
import { SYSTEM_ERROR } from "../constant"

const app = express()

app.use((err: any, req: any, res: any, next: any) => {
  let status = 400
  let message = ""

  switch (err.message) {
    case SYSTEM_ERROR:
      status = 500
      message = "system error"
      break
  }

  res.type(status)
  res.json({
    errCode: status,
    errMessage: message
  })
})

export default app