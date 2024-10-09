import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";

function SignupForm() {
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
    } catch (error) {}
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 w-full max-w-md"
      >
        <h1 className="text-5xl text-pink-600 font-Fredoka">
          Create An Account
        </h1>
        <input
          className="w-full text-slate-200 rounded-lg px-4 py-3 bg-[#0f172a] outline-none placeholder:tracking-widest text-xl font-medium"
          type="text"
          placeholder="USERNAME"
        />
        <input
          className="w-full text-slate-200 rounded-lg px-4 py-3 bg-[#0f172a] outline-none placeholder:tracking-widest text-xl font-medium"
          type="email"
          placeholder="EMAIL"
        />
        <input
          className="w-full text-slate-200 rounded-lg px-4 py-3 bg-[#0f172a] outline-none placeholder:tracking-widest text-xl font-medium"
          type="password"
          placeholder="PASSWORD"
        />
        <Button
          className="!w-full !text-2xl !rounded-2xl !tracking-wider !p-2 !text-slate-50"
          variant="contained"
        >
          Create Account
        </Button>

        <div className="w-full flex items-center my-1">
          <div className="flex-grow h-px bg-slate-200"></div>
          <span className="text-slate-400 text-md px-2">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
          <FcGoogle className="text-2xl" />
          <span>Sign up with Google</span>
        </button>

        <p className="text-slate-400">
          Already have an account ?{" "}
          <span
            className="text-cyan-300 cursor-pointer hover:underline font-Fredoka"
            onClick={() => Navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
