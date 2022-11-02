import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-sky-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
