import { ActionTypes } from "../constants/action-types";


const initialState = {
  products:[]
};

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      // Return the result of spreading over state and adding the products with the value of payload
      return {...state, products: payload};
    default:
      return state;
  }
};

export const selectedProductReducer = (state={}, {type, payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state, ...payload}
    default: 
      return state;
  }
};