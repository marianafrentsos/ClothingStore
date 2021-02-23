import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingIcon.svg";
import "./CartIcon.scss";
import { toggleCartHidden } from "../../redux/Cart/cartActions";
import { selectCartItemsCount } from "../../redux/Cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppingIcon"></ShoppingIcon>
      <span className="itemCount">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
