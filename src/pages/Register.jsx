import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../helpers/http";
import * as Yup from "yup"

const Register = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const registerValidation = Yup.object().shape({
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
    validationSchema: registerValidation,
    onSubmit: async (values) => {
      try {
        const form = {
          email: values.email,
          password: values.password,
        };

        console.log(form);
        const encoded = new URLSearchParams(form);
        await http().post(
          "/auth/register",
          encoded.toString()
        );
        setError(false);
        navigate("/auth/login");
      } catch (err) {
        console.log(err);
        setMsg(err.response.message);
        setError(true);
      }
    },
  });

  return (
    <div className="card bg-primary/30 p-8">
      <div className="card-body">
        <h1 className="card-title text-2xl mb-4">Register</h1>
        {error ? <div>{msg}</div> : null}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-fit gap-4"
        >
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text text-lg font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input !outline-0 border-2 border-accent"
            />
            {formik.errors.email ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.email}
                </span>
              </label>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text text-lg font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="input !outline-0 border-2 border-accent"
            />
            {formik.errors.password ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.password}
                </span>
              </label>
            ) : null}
          </div>
          <button type="submit" className="btn btn-accent">
            Register
          </button>
          <Link to="/auth/login" className="btn btn-outline btn-accent">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
