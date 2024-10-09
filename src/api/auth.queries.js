import { useMutation } from "react-query";
import { signup, login } from "../firebase/auth.service.js";

export const useSignUp = () => {
  return useMutation((data) => signup(data.email, data.password));
};

export const useLogin = () => {
  return useMutation((data) => login(data.email, data.password));
};

// @Kunal
/* 
how to use in component

  const handleSignup = (email, password) => {
    signupMutation.mutate({ email, password });
  };

  const handleLogin = (email, password) => {
    loginMutation.mutate({ email, password });
  };
*/
