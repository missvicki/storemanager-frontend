import {
    GET_PRODUCTS,
    GET_PRODUCTS_START
} from '../actions/index';

const initialState = {
    product: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_START:
            return {
                ...state
            }
        case GET_PRODUCTS:
            return {
                ...state,
                product: action.productsData.products
            }
        default:
            return state;
    }
};

export default productReducer;
