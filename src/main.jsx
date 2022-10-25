import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterList from "./pages/CharacterList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/characters",
    element: <CharacterList />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
