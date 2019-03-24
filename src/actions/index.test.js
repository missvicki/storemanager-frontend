import {
    loginUser,
    LOGIN_USER,
    failedLoginUser,
    FAILED_LOGIN_USER,
    loginStarted,
    LOGIN_STARTED,
    removeLoginError,
    REMOVE_LOGIN_ERROR
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

    it("should create action to start login", () => {
        expect(removeLoginError()).toEqual({ type: REMOVE_LOGIN_ERROR });
    });


});
