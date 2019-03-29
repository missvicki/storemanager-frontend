import {
    CREATE_USER,
    FAILED_USER,
    CREATE_USER_START,
    REMOVE_USER_ERROR
} from '../actions/index';

const initialState = {
    userMessage: null,
    userError: null,
    loading: false
};

const createUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_START:
            return {
                ...state,
                userMessage: "",
                userError: "",
                loading: true
            }
        case CREATE_USER:
            return {
                ...state,
                userError: null,
                userMessage: action.userData,
                loading: false
            }
        case FAILED_USER:
            return {
                ...state,
                userError: action.errorMsg,
                loading: false
            };
        case REMOVE_USER_ERROR:
            return {
                ...state,
                userError: "",
                userMessage: "",
                loading: false
            };
        default:
            return state;
    }
};

export default createUsersReducer;
