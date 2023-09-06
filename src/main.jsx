import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Navigate } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.scss";

import { MainPage, PersonPage, ErrorPage, RootPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate replace to="/main" />
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/person/:personId",
        element: <PersonPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);