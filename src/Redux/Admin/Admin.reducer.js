import * as types from './Admin.type';

const innitialState = {
    AdminProducts: null
}

export default function AdminReducer(state = innitialState, action) {
    switch (action.type) {
        case types.GET_ADMIN_PRODUCTS:
            return {
                ...state,
                AdminProducts: action.data
            }
        case types.ADD_ADMIN_PRODUCT:
            return {
                ...state,
                AdminProducts: action.data
            }
        case types.UPDATE_ADMIN_PRODUCT:
            return {
                ...state,
                AdminProducts: action.data
            }
        case types.REMOVE_ADMIN_PRODUCT:
            return {
                ...state,
                AdminProducts: action.data
            }
        default: return state;
    }
}