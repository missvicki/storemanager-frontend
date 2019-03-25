import loginReducer from './login';
import {
    LOGIN_USER,
    FAILED_LOGIN_USER,
    LOGIN_STARTED,
    REMOVE_LOGIN_ERROR
} from "../actions/index.js";

describe('login reducer', () => {
    const initialState = {
        loginError: null,
        token: null,
        loading: false
    };
    it("should return initial state for undefined action", () => {
        expect(loginReducer(initialState, { type: "hey there" })).toEqual(initialState);
    });

    it("should dispatch LOGIN_STARTED action", () => {
        expect(
            loginReducer(initialState, { type: LOGIN_STARTED }).loginError
        ).toBe("");
        expect(
            loginReducer(initialState, { type: LOGIN_STARTED }).token
        ).toBe("");
        expect(
            loginReducer(initialState, { type: LOGIN_STARTED }).loading
        ).toBe(true);
    });

    it("should dispatch FAILED_LOGIN_USER action", () => {
        expect(
            loginReducer(initialState, { type: FAILED_LOGIN_USER, errorMsg: "am an error" }).loginError
        ).toBe("am an error");
    });

    it("REMOVE_LOGIN_ERROR action sets loginError to false", () => {
        expect(
            loginReducer(initialState, { type: REMOVE_LOGIN_ERROR }).loginError
        ).toBe("");
    });

    it("should dispatch LOGIN_USER", () => {
        expect(
            loginReducer(initialState, {
                type: LOGIN_USER,
                userData: "sgjfhg348y8jhsgdf"
            }
            )
        ).toEqual({
            loginError: null,
            "token": "sgjfhg348y8jhsgdf",
            loading: false
        });
    });
});
