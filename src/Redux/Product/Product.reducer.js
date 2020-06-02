import * as types from './Product.type';

const innitialState = {
    Products: [],
    SingleProduct: null
}

export default function productReducer(state = innitialState, action) {
    switch (action.type) {
        case types.GET_DATA_HOME:
            return {
                ...state,
                Products: action.data
            };
        case types.GET_DATA_OF_TYPE:
            return {
                ...state,
                Products: action.data
            }
        case types.GET_DATA_SINGLE_PRODUCT:
            return {
                ...state,
                SingleProduct: action.data
            }
        case types.REFRESH_DATA:
            return {
                ...state,
                Products: []
            }
        default: return state;
    }
}