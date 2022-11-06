import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as profileAction from "../redux/asyncActions/profile";
import avatar from "../assets/images/avatar-default.jpg";
import { Link, useNavigate } from "react-router-dom";
import LoadingCard from "./LoadingCard";
import { Cloudinary } from "@cloudinary/url-gen";

const CardProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.user);
  const loadingState = useSelector((state) => state.profile.isLoading);
  const token = useSelector((state) => state.profile.token);
  const navigate = useNavigate();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dl4deuzwk"
    }
  })

  const myImage = cld.image(userProfile?.picture)

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
              ? myImage.toURL()
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
