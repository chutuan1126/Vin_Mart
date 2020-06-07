import * as types from './Location.type';
import axios from 'axios';

export const setLocation = (location) => async dispatch => {
    dispatch({
        type: types.SET_LOCATION,
        location
    });
}

export const setLoginFacebook = ({ email, password }) => async dispatch => {
    const api = "http://localhost:8080/product/getproduct/checklogin/login";

    const res = await axios.post(api, { email, password });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.SET_LOGIN_FACEBOOK,
                data
            });
        }
    }
    catch {
        console.log("err");
    }
}