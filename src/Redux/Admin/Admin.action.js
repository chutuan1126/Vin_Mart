import * as types from './Admin.type';
import axios from 'axios';

export const getAdminProducts = () => async dispatch => {
    const api = `http://localhost:8080/product/getproduct`;

    const res = await axios.post(api, {});

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

export const addProduct = ({ name, proid, price, faceProduct, promotion }) => async dispatch => {
    const api = `http://localhost:8080/product/addproduct`;

    const res = await axios.post(api, { name, proid, price, faceProduct, promotion });

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

export const removeProduct = id => async dispatch => {
    const api = `http://localhost:8080/product/deleteproduct`;

    const res = await axios.post(api, { id });

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

export const updateProduct = ({ id, name, proid, price, faceProduct, promotion }) => async dispatch => {
    const api = `http://localhost:8080/product/editproduct`;

    const res = await axios.post(api, { id, name, proid, price, faceProduct, promotion });

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