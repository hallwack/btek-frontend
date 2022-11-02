import React from "react";

const CardProfile = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Raihan Adam</h2>
        <p>email@email.com</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
