import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import http from "../helpers/http";

const Login = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
    password: Yup.string()
      .required("Password Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must be including 1 symbol, 1 uppercase, and 1 number"
      )
      .min(8, "Password must be at least 8 characters or more"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, action) => {
      try {
        const form = {
          email: values.email,
          password: values.password,
        };

        console.log(form);
        const encoded = new URLSearchParams(form);
        const { data } = await http().post("/auth/login", encoded.toString());
        window.localStorage.setItem("token", data.results.token);
        setError(false);
        action.setSubmitting(true);
        navigate("/");
      } catch (err) {
        setMsg(err.response.data.message);
        setError(true);
      }
    },
  });

  return (
    <div className="rounded-md p-12 bg-cyan-200">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      {error ? <div>{msg}</div> : null}
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
            className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-sky-600"
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
            className="px-1 py-1.5 rounded-md text-slate-800 border-2 border-sky-600"
          />
        </div>
        <button type="submit" className="px-3 py-2 bg-sky-500 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
