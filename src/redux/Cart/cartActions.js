import { cartActionTypes } from "./cartTypes.js";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const decreaseQuantity = item => ({
  type: cartActionTypes.DECREASE_QUANTITY,
  payload: item
});
export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});
