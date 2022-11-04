import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const http = (token) => {
  const headers = {}

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  return axios.create({
    baseURL: process.env.BASE_URL || "https://btek-backend.vercel.app/",
    headers
  })
}

export default http
