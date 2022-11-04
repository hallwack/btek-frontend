import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as profileAction from "../redux/asyncActions/profile";
import avatar from "../assets/images/avatar-default.jpg";
import { Link, useNavigate } from "react-router-dom";
import LoadingCard from "./LoadingCard";

const CardProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.user);
  const loadingState = useSelector((state) => state.profile.isLoading);
  const token = useSelector((state) => state.profile.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile?.fullName) {
      dispatch(profileAction.getDataUser({ token }));
    }
  }, []);

  const Card = (
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
          {userProfile?.fullName ? userProfile?.fullName : null}
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

  if (loadingState === true) {
    return <LoadingCard />;
  } else {
    if (userProfile?.fullName == null) {
      navigate("/profile/edit");
    } else {
      return Card;
    }
  }
};

export default CardProfile;
