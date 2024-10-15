import React from "react";
import Navbar from "../../components/UI/Navbar.jsx";
import LandingPage from "../../components/UI/LandingPage.jsx";

function Landing() {
  return (
    <div className="bg-[#030712] border-2 border-pink-500">
      <Navbar /> 
      <LandingPage />
    </div>
  );
}

export default Landing;
