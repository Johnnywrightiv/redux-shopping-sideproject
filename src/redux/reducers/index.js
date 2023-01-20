import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

// This is the state object (store?) that we access data from. The sum of calling combineReducers on our reducers. State gets updated by Events triggering Actions that call a Dispatcher and (invoke?) the reducers.
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
});

export default reducers;