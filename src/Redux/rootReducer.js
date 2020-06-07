import { combineReducers } from 'redux';

//reducer
import LoginReducer from './Login/Login.reducer';
import AdminReducer from './Admin/Admin.reducer';
import CartReducer from './Cart/Cart.reducer';
import ProductReducer from './Product/Product.reducer';
import LocationReducer from './Location/Location.reducer';

const rootReducer = combineReducers({
    LoginReducer,
    AdminReducer,
    CartReducer,
    ProductReducer,
    LocationReducer
});

export default rootReducer;