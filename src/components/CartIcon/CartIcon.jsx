import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingIcon.svg";
import "./CartIcon.scss";
import { toggleCartHidden } from "../../redux/Cart/cartActions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppingIcon"></ShoppingIcon>
      <span className="itemCount">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
