import { combineReducers } from "redux";
import userReducer from "./User/userReducer.js";
import cartReducer from "./Cart/cartReducer.js";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
