import React from "react";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-sky-100 flex flex-col">
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col p-16">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-neutral gap-2">
          <div className="mb-8 ml-4">
            <h1 className="text-3xl font-bold">BTEK</h1>
          </div>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <a>Dashboard</a>
          </li>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <a>Profile</a>
          </li>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarLayout;
