import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as profileAction from "../redux/asyncActions/profile";
import avatar from "../assets/images/avatar-default.jpg";
import { Link, useNavigate } from "react-router-dom";

const CardProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!userProfile?.fullName) {
      dispatch(profileAction.getDataUser({ token }));
    }
    if (userProfile?.fullName === null) {
      navigate("/profile/edit");
    }
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            userProfile?.picture
              ? `http://localhost:8888/assets/upload/${userProfile?.picture}`
              : avatar
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {userProfile?.fullName ? userProfile?.fullName : "Name not Defined"}
        </h2>
        <p>{userProfile?.email}</p>
        <div className="card-actions justify-end">
          <Link to="/profile/edit" className="btn btn-primary">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
