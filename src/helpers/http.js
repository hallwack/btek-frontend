import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const http = (token) => {
  const headers = {}

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  return axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:8888",
    headers
  })
}

export default http
