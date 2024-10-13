import React from "react";

function LandingPage() {
  return (
    <div className="w-full ">
      <div className="z-10 h-screen w-full overflow-hidden bg-[url('src/assets/landingPage.jpg')] bg-cover bg-center">
        <h1 className="text-6xl text-center mt-36 font-Exo">
          Start <span className="font-Agbalumo text-[#e11d48]">Trippin</span> on{" "}
          <br /> Adventures
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
