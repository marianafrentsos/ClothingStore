import React from "react";
import "./CustomButton.scss";
export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "googleSignIn" : ""} customButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
