import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<AppLayout />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
