import React from "react";

const LoadingCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl animate-pulse">
      <figure>
        <div className="bg-gray-300 h-40 w-full"></div>
      </figure>
      <div className="card-body gap-3">
        <div className="bg-gray-300 h-4 w-7/12 rounded"></div>
        <div className="bg-gray-300 h-4 w-9/12 rounded"></div>
        <div></div>
        <div className="mt-2 card-actions justify-end">
          <div className="bg-gray-300 h-12 w-4/12 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
