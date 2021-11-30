//en este archivo se combinan los reducers
import { combineReducers } from 'redux';
import constantInfoReducer from './constantInfoReducer'
import professionalReducer from './professionalReducer'
import userReducer from './userReducer';
import sessionReducer from './sessionReducer';
import adminReducer from './adminReducer';
// import cartReducer from './cartReducer';

export default combineReducers({
    constantInfoReducer,
    professionalReducer,
    userReducer,
    sessionReducer,
    adminReducer,
    // cartReducer
})
