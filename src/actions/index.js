const ActionTypes= {
    TEST_THIS_ACTION: 'TEST_THIS_ACTION'

};
export default ActionTypes;
export const LOGIN_USER = "LOGIN_USER";
export const FAILED_LOGIN_USER = "FAILED_LOGIN_USER";
export const LOGIN_STARTED = "LOGIN_STARTED";
export const REMOVE_LOGIN_ERROR = "REMOVE_LOGIN_ERROR";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const CREATE_USER = "CREATE_USER";
export const FAILED_USER = "FAILED_USER";
export const CREATE_USER_START = "CREATE_USER_START";
export const REMOVE_USER_ERROR = "REMOVE_USER_ERROR";

export const loginUser = userData => {
    return {
        type: LOGIN_USER,
        userData
    };
};

export const failedLoginUser = errorMsg => {
    return {
        type: FAILED_LOGIN_USER,
        errorMsg
    };
};

export const loginStarted = () => {
    return {
        type: LOGIN_STARTED
    };
};

export const removeLoginError = () => {
    return {
        type: REMOVE_LOGIN_ERROR
    };
};

export const removeUserError = () => {
    return {
        type: REMOVE_USER_ERROR
    };
};

export const getProducts = productsData => {
    return {
        type: GET_PRODUCTS,
        productsData
    };
};

export const productsStarted = () => {
    return {
        type: GET_PRODUCTS_START
    };
};

export const createUser = userData => {
    return {
        type: CREATE_USER,
        userData
    };
};

export const failedUser = errorMsg => {
    return {
        type: FAILED_USER,
        errorMsg
    };
};

export const startCreate = () => {
    return {
        type: CREATE_USER_START
    };
};
