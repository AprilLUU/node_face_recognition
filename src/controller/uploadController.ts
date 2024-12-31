import fs from "fs"
import getDir from "../utils/getDir"

class UploadController {
  async createDir(req: any, res: any, next: any) {
    try {
      await fs.promises.mkdir(getDir(), { recursive: true })
    } catch (err) {
      console.log(err)
    }
    next()
  }

  uploadFile(req: any, res: any, next: any) {
    console.log(req.file)
    res.end("file upload success")
  }
}

export default new UploadController();