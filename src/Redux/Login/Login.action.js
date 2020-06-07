import * as types from './Login.type';
import axios from 'axios';

export const LoginAdmin = ({ email, password }) => async dispatch => {
    const api = "http://localhost:8080/product/getproduct/checklogin/login";

    const res = await axios.post(api, { email: email, password: password });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.LOGIN_ADMIN,
                data
            });
        }
    }
    catch {
        console.log("err");
    }
}