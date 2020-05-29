import * as types from './Cart.type';
import axios from 'axios';

export const getCart = () => async dispatch => {

    const api = `http://localhost:8080/cart/getcart`;

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

export const addToCart = idProduct => async dispatch => {

    const api = `http://localhost:8080/cart/addtocart`;

    const res = await axios.post(api, { id: idProduct });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.ADD_TO_CART,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const removeFromCart = idProduct => async dispatch => {

    const api = `http://localhost:8080/cart/removecart`;

    const res = await axios.post(api, { id: idProduct });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.REMOVE_CART,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const updateCart = idProduct => async dispatch => {

    const api = `http://localhost:8080/cart/updatecart`;

    const res = await axios.post(api, { id: idProduct });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.UPDATE_CART,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const addWatched = idProduct => async dispatch => {
    dispatch({
        type: types.WATCHED_PRODUCT,
        idProduct
    });
}