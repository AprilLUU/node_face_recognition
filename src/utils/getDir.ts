import { UPLOAD_PATH } from "../constant"

const getDir = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${UPLOAD_PATH}${year}-${month}-${day}`
}

export default getDir