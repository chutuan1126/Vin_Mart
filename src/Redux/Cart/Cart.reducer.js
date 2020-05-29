import * as types from './Cart.type';

const innitialState = {
    Cart: [],
    Watched: []
}

export default function cartReducer(state = innitialState, action) {
    switch (action.type) {
        case types.GET_CART:
            return {
                ...state,
                Cart: action.data
            }
        case types.ADD_TO_CART:
            return {
                ...state,
                Cart: action.data
            }
        case types.REMOVE_CART:
            return {
                ...state,
                Cart: action.data
            }
        case types.UPDATE_CART:
            return {
                ...state,
                Cart: action.data
            }
        case types.WATCHED_PRODUCT:
            return {
                ...state,
                Watched: [
                    ...state.Watched,
                    action.idProduct
                ]
            }
        default: return state;
    }
}