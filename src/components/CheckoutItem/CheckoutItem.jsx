import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decreaseQuantity
} from "../../redux/Cart/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ removeItem, cartItem, addItem, decreaseQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            decreaseQuantity(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="removeButton"
        onClick={() => {
          removeItem(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
