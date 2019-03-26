import { combineReducers } from 'redux';
import testReducer from './testReducer';
import loginReducer from "./login";
import productReducer from "./productsReducer";

const reducerParts = {
  testReducer,
  login: loginReducer,
  products: productReducer
}

// we combine the individual parts
const reducer = combineReducers(reducerParts);

// and export only the parent reducer
export default reducer;
