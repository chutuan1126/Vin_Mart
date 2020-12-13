import * as types from './Product.type';

const innitialState = {
    Products: { all: [] },
    SingleProduct: {
        data: null,
        total: 0
    },
    DetailProduct: null
}

export default function productReducer(state = innitialState, action) {
    switch (action.type) {
        case types.GET_DATA_HOME:
            return {
                ...state,
                Products: { ...state.Products, ...action.data, all: [...state.Products.all, ...action.all] }
            };
        case types.GET_DATA_OF_TYPE:
            return {
                ...state,
                SingleProduct: { data: action.data, total: action.total }
            }
        case types.GET_DATA_SINGLE_PRODUCT:
            return {
                ...state,
                DetailProduct: action.data
            }
        case types.REFRESH_DATA:
            return {
                ...state,
                Products: { all: [] },
            }
        default: return state;
    }
}