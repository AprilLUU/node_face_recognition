import { exec } from "child_process"
import { SCRIPT_PATH, SYSTEM_ERROR } from "../constant"

class DetectController {
  faceDetect(req: any, res: any, next: any) {
    exec(`python ${SCRIPT_PATH}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        next(new Error(SYSTEM_ERROR))
      }
      console.log(`stdout: ${stdout}`)
      console.error(`stderr: ${stderr}`)
      res.status(200)
      res.json({
        code: 200,
        message: "face recognition success"
      })
    })
    
  }
}

export default new DetectController()
