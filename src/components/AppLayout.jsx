import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="page-wrapper">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;