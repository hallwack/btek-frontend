import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import * as profileAction from "../redux/asyncActions/profile";

const CardEditProfile = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.user);

  const [image, setImage] = useState();

  const editProfileSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name Required"),
    birthDate: Yup.string().required("Birth Date Required"),
    picture: Yup.mixed().nullable(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: userProfile?.fullName,
      birthDate: userProfile?.birthDate,
      picture: null,
    },
    validationSchema: editProfileSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          fullName: values.fullName,
          birthDate: values.birthDate,
          picture: image,
        };

        const token = window.localStorage.getItem("token");
        dispatch(profileAction.editData({ token, data }));
        navigate("/profile");
      } catch (err) {
        console.log(err);
        setMsg(err.response.message);
        setError(true);
      }
    },
  });

  const handlePictureChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!userProfile?.fullName) {
      dispatch(profileAction.getDataUser({ token }));
    }
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full gap-4"
        >
          {error ? <div>{msg}</div> : null}
          <div className="form-control">
            <label className="label" htmlFor="picture">
              <span className="label-text">Picture</span>
            </label>
            <input
              type="file"
              accept="image/*"
              name="picture"
              id="picture"
              onChange={handlePictureChange}
              className={`file-input ${
                formik.errors.picture
                  ? "file-input-error border-error"
                  : "border-accent"
              } file-input-bordered !outline-0 border-2 file-input-accent`}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              className={`input ${
                formik.errors.fullName
                  ? "input-error border-error"
                  : "border-accent"
              } !outline-0 border-2`}
            />
            {formik.errors.fullName ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.fullName}
                </span>
              </label>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="birthDate">
              Birth Date
            </label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
              className={`input ${
                formik.errors.birthDate
                  ? "input-error border-error"
                  : "border-accent"
              } !outline-0 border-2`}
            />
            {formik.errors.birthDate ? (
              <label className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.birthDate}
                </span>
              </label>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardEditProfile;
