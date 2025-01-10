import { UPLOAD_PATH } from "../constant"

const getDir = () => {
  const date = new Date()
  const year = date.getFullYear()
  let month: number | string = date.getMonth() + 1
  let day: number | string = date.getDate()
  // 小于10 填充0前缀 与python获取date一致
  if (month < 10) month = "0" + String(month)
  if (day < 10) day = "0" + String(day)

  return `${UPLOAD_PATH}${year}-${month}-${day}`
}

export default getDir
