import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "../../firebase/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';

function SignupForm() {
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      // Handle form submission
      // console.log(username, email, password);
      // Navigate("/login");
      await createUserWithEmailAndPassword(auth,email,password);
      const User=auth.currentUser;
      console.log(User);
      if(User){
        await setDoc(doc(db,"users",User.uid),{
          username: username,
          email: email,
          id: User.uid
          });
      }
      // print the toast message
      toast.success("Account created successfully",{
        position: "top-right",
      });
      // toast
      Navigate("/login");
    } catch (error) {   
      // Handle errors
      toast.error(`${error} Error creating account`,{
        position: "top-right",
        });
      console.error(error);
   
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-2xl">
      {/* <ToastContainer1/> */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6 w-full max-w-md"
      >
        <h1 className="text-5xl text-purple-500 font-Fredoka mb-2">
          Create An Account
        </h1>
        <input
          className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
          type="text"
          placeholder="USERNAME"
          name="username"
        />
        <input
          className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
          type="email"
          placeholder="EMAIL"
          name="email"
        />
        <input
          className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
          type="password"
          placeholder="PASSWORD"
          name="password"
        />
        <Button
          className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-purple-600 !hover:bg-purple-800 !transition !duration-300"
          variant="contained"
          type="submit"
        >
          Create Account
        </Button>

        <div className="w-full flex items-center my-2">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-gray-400 text-md px-4">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
          <FcGoogle className="text-2xl" />
          <span>Sign up with Google</span>
        </button>

        <p className="text-gray-400">
          Already have an account?{" "}
          <span
            className="text-cyan-400 cursor-pointer hover:underline font-Fredoka transition duration-300"
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