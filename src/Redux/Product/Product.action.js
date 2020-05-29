import * as types from './Product.type';
import axios from 'axios';

export const getDataHome = ({ page, pageNumber }) => async dispatch => {
    const api = "http://localhost:8080/product/getproduct/home";

    const res = await axios.post(api, { page: page, pageNumber: pageNumber });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.GET_ALL_DATA,
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