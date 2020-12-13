import * as types from './Cart.type';
import { addToCart } from './middleCart';

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
                Cart: addToCart(state.Cart, action.item)
            }
        case types.REMOVE_CART:
            return {
                ...state,
                Cart: state.Cart.filter(i => i.data.id !== action.idProduct)
            }
        case types.UPDATE_CART:
            return {
                ...state,
                Cart: state.Cart.map(i => {
                    if (i.data.id === action.idProduct) {
                        return {
                            data: i.data,
                            quantity: action.quantity ? action.quantity : i.quantity - 1
                        }
                    } else {
                        return i;
                    }
                })
            }
        case types.WATCHED_PRODUCT:
            return {
                ...state,
                Watched: [
                    ...state.Watched,
                    action.item
                ]
            }
        case types.CLEAR_CART:
            return { ...state, Cart: [] }
        default: return state;
    }
}