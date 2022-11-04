import axios from "axios"

const http = (token) => {
  const headers = {}

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  return axios.create({
    baseURL: import.meta.env.BASE_URL || "https://btek-backend.vercel.app/",
    headers
  })
}

export default http
