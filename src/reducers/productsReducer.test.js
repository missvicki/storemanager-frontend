import productsReducer from './productsReducer';

import {
    GET_PRODUCTS,
    GET_PRODUCTS_START
} from "../actions/index.js";

describe('products reducer', () => {
    const initialState = {
        product: null
    };
    it("should return initial state for undefined action", () => {
        expect(productsReducer(initialState, { type: "hey there" })).toEqual(initialState);
    });

    it("should dispatch GET_PRODUCTS_START action", () => {
        expect(
            productsReducer(initialState, { type: GET_PRODUCTS_START }).product
        ).toBe(null);
    });

    it("should dispatch GET_PRODUCTS action", () => {
        expect(
            productsReducer(initialState, {
                type: GET_PRODUCTS,
                productsData: {products : []}
            }
            )
        ).toEqual({
            "product": []
        });
    });

});
