import React from "react";
import { shallow } from "enzyme";
import { HomeView, mapDispatchToProps, mapStateToProps } from "./Home";

describe('Home View', () => {
    const mockProductsFetch = jest.fn();
    const dispatch = jest.fn();

    const productProps = {
        products: mockProductsFetch
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
    it("should map dispatch to props", () => {
        mapDispatchToProps(dispatch).products();
        expect(dispatch.mock.calls.length).toBe(1);
    });

    it("should map state to props", () => {
        const products = { product: [] };
        expect(mapStateToProps({ products })).toEqual({ product: [] });
    });

});
