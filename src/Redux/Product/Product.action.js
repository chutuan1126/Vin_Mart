import * as types from './Product.type';
import axios from 'axios';

export const getDataHome = (params) => async dispatch => {
    const api = "http://localhost:8080/product/getproduct";

    const res = await axios.post(api, { ...params });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_DATA_HOME,
                data: { [params.id]: data.data },
                all: [...data.data]
            });
        }
    }
    catch {
        console.log("err");
    }
}

export const getDataOfType = ({ pageNumber, code }) => async dispatch => {
    const api = "http://localhost:8080/product/getproduct";

    const res = await axios.post(api, { pageNumber, code, size: 20 });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_DATA_OF_TYPE,
                data: data.data,
                total: data.total
            });
        }
    }
    catch {
        console.log("err");
    }
}

export const getSingleProduct = id => async dispatch => {
    const api = `http://localhost:8080/product/singleproduct`;
    const res = await axios.post(api, { id });

    try {
        const { data } = res;
        console.log(data);
        if (data) {
            dispatch({
                type: types.GET_DATA_SINGLE_PRODUCT,
                data
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