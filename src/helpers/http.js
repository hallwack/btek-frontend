import axios from "axios"

const http = (token) => {
  const headers = {}

  if (token) {
    headers.auhorization = `Bearer ${token}`
  }

  return axios.create({
    baseURL: "http://localhost:8888",
    headers
  })
}

export default http
