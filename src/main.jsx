import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage, PersonPage } from "./pages";
import { Layout } from "./views/layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><MainPage /></Layout>,
  },
  {
    path: "/person/:personId",
    element: <Layout><PersonPage /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);