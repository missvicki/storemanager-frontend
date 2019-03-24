import {
    LOGIN_USER,
    FAILED_LOGIN_USER,
    LOGIN_STARTED,
    REMOVE_LOGIN_ERROR
} from "../actions/index.js";

const initialState = {
    loginError: null,
    token: null,
    loading: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STARTED:
            return {
                ...state,
                loginError: "",
                token: "",
                loading: true
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: false,
                loginError: null,
                token: action.userData
            };
        case FAILED_LOGIN_USER:
            return {
                ...state,
                loginError: action.errorMsg,
                loading: false
            };
        case REMOVE_LOGIN_ERROR:
            return {
                ...state,
                loginError: "",
                loading: false
            };
        default:
            return state;
    }
};

export default loginReducer;