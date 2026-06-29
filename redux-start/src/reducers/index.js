import { combineReducers } from "redux";
import ProductReducer from "./product.reducer";
import CartReducer from "./cart.reducer";
import TodoReducer from "./todo.reducer";
import ShoppingReducer from "./shopping.reducer";

export default combineReducers({
  inCart: CartReducer,
  products: ProductReducer,
  todos: TodoReducer,
  shopping: ShoppingReducer
});
