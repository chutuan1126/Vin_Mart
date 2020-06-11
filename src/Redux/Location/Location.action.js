import * as types from './Location.type';

export const setLocation = (location) => async dispatch => {
    dispatch({
        type: types.SET_LOCATION,
        location
    });
}