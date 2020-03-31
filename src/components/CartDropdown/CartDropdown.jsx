import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = () => {
  return (
    <div className="cartDropdown">
      <div className="cartItems"></div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
