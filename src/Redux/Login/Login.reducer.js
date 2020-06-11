import * as types from './Login.type';

const innitialState = {
    LoginAdmin: null
}

export default function LoginReducer(state = innitialState, action) {
    switch (action.type) {
        case types.LOGIN_ADMIN:
            return {
                ...state,
                LoginAdmin: action.data
            }
        default: return state;
    }
}