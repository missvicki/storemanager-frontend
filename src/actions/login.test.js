import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import loginFetch from "./loginAction";
import { LOGIN_USER, FAILED_LOGIN_USER } from "./index";


jest.mock("axios");

describe("login async actions", () => {
    const createMockStore = configureMockStore([thunk]);
    const store = createMockStore({});
    const mockPushMethod = jest.fn();

    it("should dispatch loginUser action creator on successful login", () => {
        axios.post.mockResolvedValue({ data: {access_token:"sdbfh"}});
        return store
            .dispatch(loginFetch({ history: { push: mockPushMethod } }))
            .then(() => {
                expect(store.getActions()).toEqual([
                    {"type": "LOGIN_STARTED"}, { userData: {access_token:"sdbfh"}, type: LOGIN_USER }
            ]);
        });
    });

    it("dispatches failedLoginUser action creator on failed login", () => {
        axios.post.mockRejectedValue(
            { response: {data: {error: "Incorrect email or password."}}}
        );
        return store.dispatch(loginFetch({ })).then(() => {
            expect(store.getActions()[3]).toEqual({ type: FAILED_LOGIN_USER, errorMsg: "Incorrect email or password."
            });
        });
    });
});
