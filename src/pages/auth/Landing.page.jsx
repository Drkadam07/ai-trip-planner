import React from "react";
import Navbar from "../../components/UI/Navbar.jsx";
import LandingPage from "../../components/UI/LandingPage.jsx";

function Landing() {
  return (
    <div className="bg-[#030712] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <LandingPage />
      </div>
    </div>
  );
}

export default Landing;