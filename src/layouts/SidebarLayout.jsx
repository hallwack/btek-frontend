import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SidebarLayout = () => {
  return (
    <Sidebar>
    <Outlet />
    </Sidebar>
  );
};

export default SidebarLayout;
