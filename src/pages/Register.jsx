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
          </div>
          <div className="form-control">
            <label className="label" htmlFor="confirmPassword">
              <span className="label-text text-lg font-medium">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className="input !outline-0 border-2 border-accent"
            />
          </div>
          <button type="submit" className="btn btn-accent">
            Register
          </button>
          <button type="submit" className="btn btn-outline btn-accent">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
