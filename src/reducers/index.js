import { combineReducers } from 'redux';
import testReducer from './testReducer';
import loginReducer from "./login";

const reducerParts = {
  testReducer,
  login: loginReducer
}

// we combine the individual parts
const reducer = combineReducers(reducerParts);

// and export only the parent reducer
export default reducer;
