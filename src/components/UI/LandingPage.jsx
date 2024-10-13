import React from "react";

function LandingPage() {
  return (
    <div className="relative inset-y-0 -top-1 bottom-0 z-0 w-full border-2 border-yellow-500">
      <div className="h-screen w-full overflow-hidden bg-[url('src/assets/landingPage.jpg')] bg-cover bg-center">
        <h1 className="text-6xl text-center mt-36 font-Exo">
          Start <span className="font-Agbalumo text-[#e11d48]">Trippin</span> on{" "}
          <br /> Adventures
        </h1>
      </div>

      <div>
        <div className="bg-[url('./assets/svgs/landingPageWave1.svg')] bg-cover bg-center h-screen w-full flex grow">
          <div className="flex grow flex-col w-96 items-center justify-center border-2 border-cyan-400 relative top-44 left-1/2 inset-y-0 text-white">
            <h1>AI-Powered Planning</h1>
            <p>
              Our advanced AI analyzes habits and travel trends, booking and
              budget management
            </p>
            <div className="w-full flex items-center my-2">
              <div className="flex-grow h-px bg-gray-600"></div>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>
            <span>Data-driven insights</span>
            <span>Dynamic adjustments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
