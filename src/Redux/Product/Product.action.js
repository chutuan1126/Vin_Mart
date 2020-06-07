import * as types from './Product.type';
import axios from 'axios';

export const getDataHome = () => async dispatch => {
    const api = "http://localhost:8080/product/getproduct/home";

    const res = await axios.post(api, {});

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_DATA_HOME,
                data
            });
        }
    }
    catch {
        console.log("err");
    }
}

export const getDataOfType = ({ type, pageNumber }) => async dispatch => {
    const api = `http://localhost:8080/product/getproduct/${type}`;

    const res = await axios.post(api, { pageNumber: pageNumber });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_DATA_OF_TYPE,
                data: data
            });
        }
    }
    catch {
        console.log("err");
    }
}

export const getSingleProduct = id => async dispatch => {
    const api = `http://localhost:8080/product/getproduct/singleproduct/${id}`;
    const res = await axios.post(api, {});

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_DATA_SINGLE_PRODUCT,
                data: data[0]
            });
        }
    }
    catch {
        console.log("err");
    }
}

export const refreshData = () => async dispatch => {
    dispatch({
        type: types.REFRESH_DATA,
    });
}