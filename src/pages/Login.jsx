import React from "react"
import { useNavigate } from "react-router-dom"
import http from "../helpers/http"

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      const form = {
        email: event.target.email.value,
        password: event.target.password.value
      }

      const encoded = new URLSearchParams(form)
      const {data} = await http().post('/auth/login', encoded.toString())
      window.localStorage.setItem("token", data.results.token)
      navigate('/')
    } catch (err) {
      window.alert(err.response.data.message)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-fit gap-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium" htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border-2 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium" htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border-2 focus:ring-1 focus:ring-blue-500" />
        </div>
        <button type="submit" className="px-3 py-2 bg-sky-300 rounded-md">Login</button>
      </form>
    </div>
  )
}

export default Login
