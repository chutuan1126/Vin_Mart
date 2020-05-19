import { combineReducers } from 'redux';

//reducer
import CartReducer from './Cart/Cart.reducer';

const rootReducer = combineReducers({
    CartReducer
});

export default rootReducer;