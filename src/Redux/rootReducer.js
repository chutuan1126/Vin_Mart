import { combineReducers } from 'redux';

//reducer
import CartReducer from './Cart/Cart.reducer';
import ProductReducer from './Product/Product.reducer';
import LocationReducer from './Location/Location.reducer';

const rootReducer = combineReducers({
    CartReducer,
    ProductReducer,
    LocationReducer
});

export default rootReducer;