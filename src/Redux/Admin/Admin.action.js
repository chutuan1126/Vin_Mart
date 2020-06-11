import * as types from './Admin.type';
import axios from 'axios';

export const getAdminProducts = ({ token }) => async dispatch => {
    const api = `http://localhost:8080/product/getproducts`;

    const res = await axios.post(api, { token });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_ADMIN_PRODUCTS,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const addProduct = ({ name, proid, price, faceProduct, promotion, token }) => async dispatch => {
    const api = `http://localhost:8080/product/addproduct`;

    const res = await axios.post(api, { name, proid, price, faceProduct, promotion, token });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.ADD_ADMIN_PRODUCT,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const removeProduct = ({ id, token }) => async dispatch => {
    const api = `http://localhost:8080/product/deleteproduct`;

    const res = await axios.post(api, { id, token });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.REMOVE_ADMIN_PRODUCT,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const updateProduct = ({ id, name, proid, price, faceProduct, promotion, token }) => async dispatch => {
    const api = `http://localhost:8080/product/editproduct`;

    const res = await axios.post(api, { id, name, proid, price, faceProduct, promotion, token });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.UPDATE_ADMIN_PRODUCT,
                data: data
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}