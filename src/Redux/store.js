import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducer
import CartReducer from './Cart/Cart.reducer';

const persistConfig = {
    key: "persistStore",
    storage
}

const persistedReducer = persistReducer(persistConfig, CartReducer);
const midleware = [thunk, logger];

export const store = createStore(persistedReducer, applyMiddleware(...midleware));
export const persistor = persistStore(store);