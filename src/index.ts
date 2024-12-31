import app from "./app"
import { helloRouter, uploadRouter, detectRouter } from "./router"
import { APP_PORT } from "./constant"

app.use("/hello", helloRouter)
app.use("/upload", uploadRouter)
app.use("/detect", detectRouter)

app.listen(APP_PORT, () => {
  console.log("server ready")
})
