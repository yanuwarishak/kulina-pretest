import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import dateReducer from "./date/date.reducer";

export default combineReducers({
  cart: cartReducer,
  date: dateReducer,
});
