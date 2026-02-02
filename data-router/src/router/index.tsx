import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import UserDetailPage from "../pages/UserDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";

import { usersLoader } from "./loaders/user.loader";
import { userDetailLoader } from "./loaders/userDetail.loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "users/:userId",
        element: <UserDetailPage />,
        loader: userDetailLoader,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
