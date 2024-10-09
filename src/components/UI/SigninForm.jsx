import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function SigninForm() {
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
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
        <h1 className="text-5xl text-pink-600 font-Fredoka">User Login</h1>
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
          Login
        </Button>

        <p className="text-slate-400">
          Forget Password ?{" "}
          <span
            className="text-cyan-300 cursor-pointer tracking-widest hover:underline font-Fredoka"
            onClick={() => Navigate("/login")}
          >
            Reset password
          </span>
        </p>
      </form>
    </div>
  );
}

export default SigninForm;
