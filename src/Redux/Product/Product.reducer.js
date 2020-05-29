import * as types from './Product.type';

const innitialState = {
    Products: [],
}

export default function productReducer(state = innitialState, action) {
    switch (action.type) {
        case types.GET_ALL_DATA:
            return {
                ...state,
                Products: action.data
            };
        case types.REFRESH_DATA:
            return {
                ...state,
                Products: []
            }
        default: return state;
    }
}