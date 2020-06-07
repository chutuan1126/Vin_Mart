import * as types from './Location.type';

const innitialState = {
    Location: null,
    Facebook: null
}

export default function cartReducer(state = innitialState, action) {
    switch (action.type) {
        case types.SET_LOCATION:
            return { ...state, Location: action.location }
        case types.SET_LOGIN_FACEBOOK:
            return { ...state, Facebook: action.data }
        default: return state;
    }
}