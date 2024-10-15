import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="relative inset-y-0 -top-1 bottom-0 z-0 w-full min-h-screen">
      <div className="h-screen w-full overflow-hidden bg-[url('src/assets/landingPage.jpg')] bg-cover bg-center">
        <h1 className="text-6xl text-center mt-36 font-Exo">
          Start <span className="font-Agbalumo text-[#e11d48]">Trippin</span> on{" "}
          <br /> Adventures
        </h1>
      </div>

      <div>
        <div className="bg-[url('./assets/landingHero.png')] bg-cover bg-center h-screen w-full">
          <div className="flex grow w-96 flex-col items-center justify-center relative top-52 left-2/3 inset-y-0 text-white">
            <h1 className="text-4xl mb-5 font-mono">AI-Powered Planning</h1>
            <p className="text-slate-400">
              Our advanced AI analyzes habits and travel trends, booking and
              budget management
            </p>
            <div className="w-full flex items-center my-5">
              <div className="flex-grow h-px bg-gray-600"></div>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-md">
              <span className="text-slate-200 flex justify-center items-center gap-2">
                <FaArrowAltCircleRight className="text-green-400" />
                Data-driven insights
              </span>
              <span className="text-slate-200 flex justify-center items-center gap-2">
                <FaArrowAltCircleRight className="text-green-400" />
                Dynamic adjustments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
