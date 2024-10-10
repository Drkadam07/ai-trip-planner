import SignupForm from "../../components/UI/SignupForm.jsx";

function SignUp() {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-full bg-gray-800 overflow-hidden">
      {/* SVG Background */}
      <div
        className="absolute inset-0 opacity-50 z-0"
        style={{
          backgroundImage: "url('src/assets/svgs/signupwave.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-evenly items-center w-full max-w-6xl mx-auto px-4">
        <SignupForm />
        <img
          src="src/assets/tripSignup.png"
          className="w-auto max-w-md mt-8 md:mt-0"
          alt="signup page picture"
        />
      </div>
    </div>
  );
}

export default SignUp;
