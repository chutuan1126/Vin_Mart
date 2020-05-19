import * as types from './Cart.type';
import { editCart } from './middleCart';

const innitialState = {
    Cart: [],
    Watched: []
}

export default function cartReducer(state = innitialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                Cart: [
                    ...state.Cart,
                    {
                        amount: 1,
                        idProduct: action.idProduct
                    }
                ]
            }
        case types.EDIT_CART:
            return {
                ...state,
                Cart: editCart(state, action.obj)
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