import * as types from './Location.type';

const innitialState = {
    Location: null
}

export default function cartReducer(state = innitialState, action) {
    switch (action.type) {
        case types.SET_LOCATION:
            return { Location: action.location }
        default: return state;
    }
}