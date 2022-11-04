import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "./App";
import CardEditProfile from "./components/CardEditProfile";
import CardProfile from "./components/CardProfile";
import LoadingCard from "./components/LoadingCard";
import "./index.css";
import AuthLayout from "./layouts/AuthLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterList from "./pages/CharacterList";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { store } from "./redux/store";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = window.localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

const routerMain = createBrowserRouter([
  /* {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
  }, */
  {
    path: "/characters",
    element: <CharacterList />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetail />,
  },
  {
    path: "/loading",
    element: <LoadingCard />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <SidebarLayout />
      </RequireAuth>
    ),
    children: [
      { path: "" },
      {
        path: "profile",
        element: <CardProfile />,
      },
      {
        path: "profile/edit",
        element: <CardEditProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routerMain} />
  </Provider>
);
