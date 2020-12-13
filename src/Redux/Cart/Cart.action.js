import * as types from './Cart.type';
import axios from 'axios';

export const getCart = () => async dispatch => {

    const api = `https://shop-server-demo.herokuapp.com/cart/getcart`;

    const res = await axios.post(api, {});

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_CART,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const addToCart = item => async dispatch => {

    // const api = `https://shop-server-demo.herokuapp.com/cart/addtocart`;

    // const res = await axios.post(api, { id: item });

    try {
        // const { data } = res;
        // if (data) {
        dispatch({
            type: types.ADD_TO_CART,
            item
        });
        // }
    }
    catch (err) {
        console.log(err);
    }
}

export const removeFromCart = idProduct => async dispatch => {

    // const api = `https://shop-server-demo.herokuapp.com/cart/removecart`;

    // const res = await axios.post(api, { id: idProduct });

    try {
        // const { data } = res;
        // if (data) {
        dispatch({
            type: types.REMOVE_CART,
            idProduct
        });
        // }
    }
    catch (err) {
        console.log(err);
    }
}

export const updateCart = (idProduct, quantity) => async dispatch => {
    // const api = `https://shop-server-demo.herokuapp.com/cart/updatecart`;

    // const res = await axios.post(api, { id: idProduct, quantity: quantity });

    try {
        // const { data } = res;
        // if (data) {
        dispatch({
            type: types.UPDATE_CART,
            idProduct,
            quantity
        });
        // }
    }
    catch (err) {
        console.log(err);
    }
}

export const addWatched = item => async dispatch => {
    dispatch({
        type: types.WATCHED_PRODUCT,
        item
    });
}

export const clearCart = () => async dispatch => {
    dispatch({
        type: types.CLEAR_CART
    });
}