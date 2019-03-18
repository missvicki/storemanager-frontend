import { combineReducers } from 'redux';
import testReducer from './testReducer';

const reducerParts = {
  testReducer
};

// we combine the individual parts
const reducer = combineReducers(reducerParts);

// and export only the parent reducer
export default reducer;
