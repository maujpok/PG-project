import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers/index'; //combined reducers
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const composeTask = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['sessionReducer']
}
const pReducer = persistReducer(persistConfig,reducer)

export const store = createStore(pReducer, composeTask(applyMiddleware(thunk)));

export const persistor = persistStore(store)
const finalStore = {persistor, store}
export default finalStore;
// export default store;