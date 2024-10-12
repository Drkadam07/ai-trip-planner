import React from "react";
import SigninForm from "../../components/UI/SigninForm.jsx";


function Login() {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-full bg-gray-800 overflow-hidden">
    {/* SVG Background */}
    <div
      className="absolute inset-y-0 -left-40 right-0 z-0"
      style={{
        backgroundImage: "url('src/assets/svgs/signupwave.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 60%",
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 flex grow md:flex-row justify-evenly items-center w-full max-w-6xl mx-auto px-4">
      <SigninForm />
      <img
        src="src/assets/login.png"
        className="hidden md:block mt-0 w-1/2 h-1/2"
        alt="login page picture"
      />
    </div>
  </div>
  );
}

export default Login;
