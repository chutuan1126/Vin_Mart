import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducer
import rootReducer from './rootReducer';

const persistConfig = {
    key: "persistStore",
    storage: storage,
    whitelist: ['CartReducer', 'LocationReducer'],
    blacklist: ['ProductReducer', 'LoginReducer']
}

console.log(process.env.NODE_ENV);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const midleware = process.env.NODE_ENV !== 'production' ? [thunk, logger] : [thunk];

export const store = createStore(persistedReducer, applyMiddleware(...midleware));
export const persistor = persistStore(store);