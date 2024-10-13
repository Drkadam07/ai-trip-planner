import React from "react";
import Navbar from "../../components/UI/Navbar.jsx";
import LandingPage from "../../components/UI/LandingPage.jsx";

function Landing() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative bg-[#030712] ">
      <Navbar /> 
      <LandingPage />
    </div>
  );
}

export default Landing;