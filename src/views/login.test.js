import React from "react";
import { shallow } from "enzyme";
import { LoginView, mapDispatchToProps, mapStateToProps } from "./Login";

describe('login view', () => {
    const mockLoginFetch = jest.fn();
    const mockRemoveLoginError = jest.fn();
    const dispatch = jest.fn();

    const loginProps = {
        login: mockLoginFetch,
        dismissLoginError: mockRemoveLoginError,
        loading: false,
        loginError: ""
    };

    const loginView = shallow(<LoginView {...loginProps} />);
    const loginViewInstance = loginView.instance();

    afterEach(() => {
        loginView.setState({ user_name: "", password: "", role: "admin" });
    });

    it("renders loginView component correctly", () => {
        expect(loginView).toMatchSnapshot();
    });

    it("onChangeHandler updates user_name in state when an event with value of user_name is passed", () => {
        loginViewInstance.onChangeHandler({
            target: { value: "victoria", name: "user_name" }
        });
        expect(loginView.state().user_name).toBe("victoria");
    });

    it("onChangeHandler updates password in state when an event with value of password is passed", () => {
        loginViewInstance.onChangeHandler({
            target: { value: "okay", name: "password" }
        });
        expect(loginView.state().password).toBe("okay");
    });

    it("onDismissHandler dispatches removeLoginError action creator to remove login error message", () => {
        loginViewInstance.onDismissHandler();
        expect(mockRemoveLoginError).toHaveBeenCalled();
    });

    it("onSubmitHandler dispatches loginFetch action creator when called", () => {
        loginViewInstance.onSubmitHandler({ preventDefault: () => null });
        expect(mockLoginFetch).toHaveBeenCalled();
    });
    it("should map dispatch to props", () => {
        mapDispatchToProps(dispatch).login();
        mapDispatchToProps(dispatch).dismissLoginError();
        expect(dispatch.mock.calls.length).toBe(2);
    });

    it("should map state to props", () => {
        const login = { loginError: "i am an error" };
        expect(mapStateToProps({ login })).toEqual({ loginError: "i am an error" });
    });

});

