import React from "react";
import "./SignInSignUp.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export default function SignInSignUp() {
  return (
    <div className="signIn_signUp">
      <SignIn />
      <SignUp />
    </div>
  );
}
