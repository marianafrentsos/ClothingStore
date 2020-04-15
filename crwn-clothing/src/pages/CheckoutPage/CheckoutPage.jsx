import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/Cart/cartSelectors";

import "./CheckoutPage.scss";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkoutPage">
      <div className="checkoutHeader">
        <div className="checkoutBlock">
          <span>Product</span>
        </div>
        <div className="checkoutBlock">
          <span>Description</span>
        </div>
        <div className="checkoutBlock">
          <span>Quantity</span>
        </div>
        <div className="checkoutBlock">
          <span>Price</span>
        </div>
        <div className="checkoutBlock">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
