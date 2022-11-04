import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import * as authAction from "../redux/asyncActions/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const forgotPasswordValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidation,
    onSubmit: async (values, action) => {
      try {
        const formValue = {
          email: values.email,
        };

        console.log(formValue);
        const form = new URLSearchParams(formValue);

        dispatch(authAction.forgotPassword({ form }));

        setError(false);
        action.setSubmitting(true);
        navigate("/auth/reset-password");
      } catch (err) {
        setMsg(err.response.data.message);
        setError(true);
      }
    },
  });
  return (
    <div className="card bg-primary/30 p-8">
      <div className="card-body">
        <h1 className="card-title text-2xl mb-4">Forgot Password</h1>
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

export default ForgotPassword;
