import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import http from "../helpers/http";
import { useSelector } from "react-redux";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const forgotPasswordData = useSelector((state) => state.auth.forgotPassword);

  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
    code: Yup.string().required("Code Required"),
    newPassword: Yup.string()
      .required("Password Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must be including 1 symbol, 1 uppercase, and 1 number"
      )
      .min(8, "Password must be at least 8 characters or more"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      code: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values, action) => {
      try {
        const form = {
          email: values.email,
          code: values.code,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        };

        console.log(form);
        const encoded = new URLSearchParams(form);
        const { data } = await http().post(
          "/auth/reset-password",
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
            {formik.errors.email ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.email}
                </span>
              </label>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="code">
              <span className="label-text text-lg font-medium">Code</span>
            </label>
            <input
              type="text"
              name="code"
              id="code"
              onChange={formik.handleChange}
              value={formik.values.code}
              className="input !outline-0 border-2 border-accent"
            />
            {formik.errors.code ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.code}
                </span>
              </label>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="newPassword">
              <span className="label-text text-lg font-medium">
                New Password
              </span>
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              className="input !outline-0 border-2 border-accent"
            />
            {formik.errors.newPassword ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.newPassword}
                </span>
              </label>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="confirmPassword">
              <span className="label-text text-lg font-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className="input !outline-0 border-2 border-accent"
            />
            {formik.errors.confirmPassword ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.confirmPassword}
                </span>
              </label>
            ) : null}
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
