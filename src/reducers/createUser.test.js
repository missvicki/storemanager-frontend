import createUsersReducer from './createUsers'
import {
    CREATE_USER,
    FAILED_USER,
    CREATE_USER_START,
    REMOVE_USER_ERROR
} from "../actions/index.js";

describe('create user reducer', () => {
    const initialState = {
        userMessage: null,
        userError: null,
        loading: false
    };
    it("should return initial state for undefined action", () => {
        expect(createUsersReducer(initialState, { type: "hey there" })).toEqual(initialState);
    });

    it("should dispatch CREATE_USER_START action", () => {
        expect(
            createUsersReducer(initialState, { type: CREATE_USER_START }).userError
        ).toBe("");
        expect(
            createUsersReducer(initialState, { type: CREATE_USER_START }).userMessage
        ).toBe("");
        expect(
            createUsersReducer(initialState, { type: CREATE_USER_START }).loading
        ).toBe(true);
    });

    it("should dispatch FAILED_USER action", () => {
        expect(
            createUsersReducer(initialState, { type: FAILED_USER, errorMsg: "am an error" }).userError
        ).toBe("am an error");
    });

    it("REMOVE_LOGIN_ERROR action sets loginError to false", () => {
        expect(
            createUsersReducer(initialState, { type: REMOVE_USER_ERROR }).userError
        ).toBe("");
    });

    it("should dispatch CREATE_USER", () => {
        expect(
            createUsersReducer(initialState, {
                type: CREATE_USER,
                userData: "Success"
            }
            )
        ).toEqual({
            userError: null,
            "userMessage": "Success",
            loading: false
        });
    });
});
