import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import http from "../helpers/http";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, action) => {
      try {
        const form = {
          email: values.email,
        };

        console.log(form);
        const encoded = new URLSearchParams(form);
        const { data } = await http().post(
          "/auth/forgot-password",
          encoded.toString()
        );
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
    <div className="card bg-primary/30 p-8">
      <div className="card-body">
        <h1 className="card-title text-2xl mb-4">Reset Password</h1>
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
          <button type="submit" className="btn btn-accent">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
