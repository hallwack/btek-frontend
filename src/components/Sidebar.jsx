import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-sky-100 flex flex-col">
        <div>
          <Navbar />
          <div className="flex flex-col p-16">{children}</div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-neutral gap-2">
          <div className="mb-8 ml-4">
            <h1 className="text-3xl font-bold">BTEK</h1>
          </div>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <Link to="/admin/profile/">Profile</Link>
          </li>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
