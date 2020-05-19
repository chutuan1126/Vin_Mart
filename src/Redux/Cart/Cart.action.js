import * as types from './Cart.type';

export const addToCart = idProduct => async dispatch => {
    dispatch({
        type: types.ADD_TO_CART,
        idProduct
    });
}

export const editCart = obj => async dispatch => {
    dispatch({
        type: types.EDIT_CART,
        obj
    });
}

export const addWatched = idProduct => async dispatch => {
    dispatch({
        type: types.WATCHED_PRODUCT,
        idProduct
    });
}