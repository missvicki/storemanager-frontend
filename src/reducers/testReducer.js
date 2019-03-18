import ActionTypes from '../actions';

const initialState = {};

const testReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.TEST_THIS_ACTION:
            return state;
        default:
            return state;
    };
};

export default testReducer;
