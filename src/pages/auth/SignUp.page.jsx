import SignupForm from "../../components/UI/SignupForm.jsx";
function SignUp() {
  return (
    <div className="flex justify-evenly items-center h-screen w-full bg-[#000310]">
      <SignupForm />
      <img
        src="src\assets\tripSignup.png"
        className="w-auto"
        alt="signup page picture"
      />
    </div>
  );
}

export default SignUp;
