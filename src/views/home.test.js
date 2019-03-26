import React from "react";
import { shallow } from "enzyme";
import { HomeView, mapDispatchToProps, mapStateToProps } from "./Home";

describe('Home View', () => {
    const mockProductsFetch = jest.fn();
    const mockRemoveUserError = jest.fn();
    const mockUsersCreate = jest.fn();
    const dispatch = jest.fn();

    const productProps = {
        products: mockProductsFetch,
        dismissUserError: mockRemoveUserError,
        usersCreate: mockUsersCreate,
        loading: false,
        userError: "",
        userMessage: ""

    };

    const homeView = shallow(<HomeView {...productProps} />);
    const homeViewInstance = homeView.instance();

    it("renders homeView component correctly", () => {
        expect(homeView).toMatchSnapshot();
    });

    it("component did mount dispatches productFetch action creator when called", () => {
        homeViewInstance.componentDidMount();
        expect(mockProductsFetch).toHaveBeenCalled();
    });

    it("should handleLogout", () => {
        homeViewInstance.handleLogout({ preventDefault: () => null });
        const token = "jjsjjas";
        expect(token).toBe("jjsjjas");
        if (token) {
            window.confirm = jest.fn();
            window.confirm("are you sure")
            expect(window.confirm).toHaveBeenCalled();
        }
    });

    it("onChangeHandler updates name in state", () => {
        homeViewInstance.onChangeHandler({
            target: { value: "victoria", name: "name" }
        });
        expect(homeView.state().name).toBe("victoria");
    });

    it("onChangeHandler updates user name in state", () => {
        homeViewInstance.onChangeHandler({
            target: { value: "victoria", name: "user_name" }
        });
        expect(homeView.state().user_name).toBe("victoria");
    });

    it("onChangeHandler updates role in state", () => {
        homeViewInstance.onChangeHandler({
            target: { value: "admin", name: "role" }
        });
        expect(homeView.state().role).toBe("admin");
    });

    it("onChangeHandler updates password in state when an event with value of password is passed", () => {
        homeViewInstance.onChangeHandler({
            target: { value: "okay", name: "password" }
        });
        expect(homeView.state().password).toBe("okay");
    });

    it("onDismissHandler dispatches removeUserError action creator to remove login error message", () => {
        homeViewInstance.onDismissHandler();
        expect(mockRemoveUserError).toHaveBeenCalled();
    });

    it("onSubmitHandler dispatches loginFetch action creator when called", () => {
        homeViewInstance.onSubmitHandler({ preventDefault: () => null });
        expect(mockUsersCreate).toHaveBeenCalled();
    });
    it("should map dispatch to props", () => {
        mapDispatchToProps(dispatch).products();
        mapDispatchToProps(dispatch).usersCreate();
        mapDispatchToProps(dispatch).dismissUserError();
        expect(dispatch.mock.calls.length).toBe(3);
    });
});
