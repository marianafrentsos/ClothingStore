import { combineReducers } from "redux";
import userReducer from "./User/userReducer.js";

export default combineReducers({
  user: userReducer
});
