import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar.jsx";

function AppWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppWrapper;
