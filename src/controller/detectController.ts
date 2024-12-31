import { exec } from "child_process"
import { SCRIPT_PATH } from "../constant"

class DetectController {
  faceDetect(req: any, res: any, next: any) {
    try {
      exec(`python ${SCRIPT_PATH}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`)
          return
        }
        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
      })
      res.send("face recognition success")
    } catch (err) {
      console.error(err)
      res.send("face recognition failed")
    }
  }
}

export default new DetectController()
