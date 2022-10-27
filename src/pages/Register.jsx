import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../helpers/http";

const Register = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const form = {
          email: values.email,
          password: values.password,
        };

        console.log(form);
        const encoded = new URLSearchParams(form);
        const { data } = await http().post(
          "/auth/register",
          encoded.toString()
        );
        setError(false);
        navigate("/login");
      } catch (err) {
        console.log(err)
        setMsg(err.response.message);
        setError(true);
      }
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold">Register</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-fit gap-4"
      >
        <div className="flex flex-col">
          <label className="text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border-2 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border-2 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border-2 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="px-3 py-2 bg-sky-300 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
