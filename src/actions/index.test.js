import {
    loginUser,
    LOGIN_USER,
    failedLoginUser,
    FAILED_LOGIN_USER,
    loginStarted,
    LOGIN_STARTED,
    removeLoginError,
    REMOVE_LOGIN_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_START,
    productsStarted,
    getProducts,
    createUser,
    startCreate,
    failedUser,
    removeUserError,
    CREATE_USER,
    FAILED_USER,
    CREATE_USER_START,
    REMOVE_USER_ERROR
} from "./index";

describe("synchronous login action creators", () => {
    it("should create action to login user", () => {
        expect(loginUser({})).toEqual({ type: LOGIN_USER, userData: {} });
    });

    it("should create action to return failed login user", () => {
        expect(failedLoginUser("am an error")).toEqual({ type: FAILED_LOGIN_USER, errorMsg: "am an error" });
    });

    it("should create action to start login", () => {
        expect(loginStarted()).toEqual({ type: LOGIN_STARTED });
    });

    it("should create action to remove error", () => {
        expect(removeLoginError()).toEqual({ type: REMOVE_LOGIN_ERROR });
    });

    it("should create action to get products", () => {
        expect(getProducts({})).toEqual({ type: GET_PRODUCTS, productsData: {} });
    });

    it("should create action to start getting products action", () => {
        expect(productsStarted()).toEqual({ type: GET_PRODUCTS_START });
    });

    it("should create action to create user", () => {
        expect(createUser({})).toEqual({ type: CREATE_USER, userData: {} });
    });

    it("should create action to return failed create user", () => {
        expect(failedUser("am an error")).toEqual({ type: FAILED_USER, errorMsg: "am an error" });
    });

    it("should create action to start user", () => {
        expect(startCreate()).toEqual({ type: CREATE_USER_START });
    });

    it("should create action to remove error", () => {
        expect(removeUserError()).toEqual({ type: REMOVE_USER_ERROR });
    });


});
