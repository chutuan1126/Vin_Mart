import * as types from './Login.type';
import axios from 'axios';

export const LoginAdmin = ({ email, password }) => async dispatch => {
    const api = "https://shop-server-demo.herokuapp.com/auth/login";

    const res = await axios.post(api, { email, password });

    try {
        const { data } = res;
        
        if (data) {
            dispatch({
                type: types.LOGIN_ADMIN,
                data: data
            });
            sessionStorage.setItem('token', data.token);
        }
    }
    catch {
        console.log("err");
    }
}

export const signUpAdmin = ({ useName, email, password, confirmPassword }) => async dispatch => {
    const api = "https://shop-server-demo.herokuapp.com/auth/signup";

    const res = await axios.post(api, { useName, email, password, confirmPassword });

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.SIGNUP_ADMIN,
                data
            });
        }
    }
    catch {
        console.log("err");
    }
}

export const logoutAdmin = () => async dispatch => {
    const api = "https://shop-server-demo.herokuapp.com/auth/logout";

    const res = await axios.post(api, {});

    try {
        const { data } = res;
        if (data) {
            dispatch({
                type: types.LOGOUT_ADMIN,
                data
            });
        }
    }
    catch {
        console.log("err");
    }
}
