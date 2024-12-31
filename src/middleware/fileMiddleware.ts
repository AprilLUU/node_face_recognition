import multer from "multer"
import path from "path"

import getDir from "../utils/getDir"

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, getDir())
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

const uploadHanlder = upload.single("face")

export default uploadHanlder