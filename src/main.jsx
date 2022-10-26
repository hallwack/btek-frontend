import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider, useLocation } from "react-router-dom";
import App from "./App";
import "./index.css";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterList from "./pages/CharacterList";
import Login from "./pages/Login";

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const a = true

  if (a) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth><App /></RequireAuth>
  },
  {
    path: "/characters",
    element: <CharacterList />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
