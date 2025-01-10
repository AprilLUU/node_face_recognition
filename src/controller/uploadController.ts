import fs from "fs"
import getDir from "../utils/getDir"
import { SYSTEM_ERROR } from "../constant"

class UploadController {
  async createDir(req: any, res: any, next: any) {
    try {
      await fs.promises.mkdir(getDir(), { recursive: true })
    } catch (err) {
      console.log(err)
      next(new Error(SYSTEM_ERROR))
    }
    next()
  }

  uploadFile(req: any, res: any, next: any) {
    console.log(req.file)
    res.status(200)
    res.json({
      code: 200,
      message: "file upload success"
    })
  }
}

export default new UploadController();