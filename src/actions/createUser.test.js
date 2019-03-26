import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { usersCreate } from "./createUser";
import { CREATE_USER_START, CREATE_USER, FAILED_USER } from "./index";


jest.mock("axios");

describe("create user async actions", () => {
    const createMockStore = configureMockStore([thunk]);
    const store = createMockStore({});
    const mockPushMethod = jest.fn();

    it("should dispatch user create action", () => {
        axios.post.mockResolvedValue({ data: { Success: "success" } });
        return store
            .dispatch(usersCreate({ history: { push: mockPushMethod } }))
            .then(() => {
                expect(store.getActions()).toEqual([
                    { type: CREATE_USER_START }, { userData: "success", type: CREATE_USER }
                ]);
            });
    });
});
