import React from "react";
import "./SignIn_SignUp.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export default function SignIn_SigUp() {
  return (
    <div className="signIn_signUp">
      <SignIn />
      <SignUp />
    </div>
  );
}
