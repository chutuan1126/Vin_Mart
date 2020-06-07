import * as types from './Login.type';

const innitialState = {
    LoginProducts: null
}

export default function LoginReducer(state = innitialState, action) {
    switch (action.type) {
        case types.LOGIN_ADMIN:
            return {
                ...state,
                AdminProducts: action.data
            }
        default: return state;
    }
}