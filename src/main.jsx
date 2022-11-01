import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterList from "./pages/CharacterList";
import Layout from "./pages/Layout";
import LayoutSidebar from "./pages/LayoutSidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = window.localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

const routerMain = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
  },
  {
    path: "/characters",
    element: <CharacterList />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />,
  },
  {
    path: "/sidebar",
    element: <LayoutSidebar />,
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerMain} />
  </React.StrictMode>
);
