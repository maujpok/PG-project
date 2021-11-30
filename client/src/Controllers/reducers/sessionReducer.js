import {
    CHECK_LOGIN,
    CLEAN_USER_LOGIN,
    REMOVE_FROM_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART_ALL,
    SET_ERROR,
    SET_PROFESSIONAL, 

} from './../../constants';

const initialState = {
    //esta es la estructura final del store, por ahora queda así para que no rompa todo
    status: {
        token:'',   
        username:'',
        id:'',
        isAdmin: false,
        isProfessional:false,
        error: false
    },
    cart: [],
    appointments: [],
    feedbacks: [],
    //status: {},
}

export default function sessionReducer(state=initialState, {type,payload}){
    switch(type){
        case CHECK_LOGIN:
            return {
                ...state,
                status: {
                    ...state.status,
                    token: payload.token || '',
                    username: payload.username || '',
                    id: payload._id || '',
                    isAdmin: payload.isAdmin || false,
                    error: false
                }
            }
        case CLEAN_USER_LOGIN:
            return {
                ...state,
                status: {
                    token:'',
                    username:'',
                    isAdmin: false,
                    isProfessional:false,
                    error: false
                }
            }
        case SET_ERROR:
            return {
                ...state,
                status: {
                    token:'',
                    username:'',
                    isAdmin: false,
                    isProfessional:false,
                    error:true
                }
            }
        case SET_PROFESSIONAL:
            return {
                ...state,
                status:{
                    ...state.status,
                    isProfessional:true
                }
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(a => a.id !== payload)   
            };
        case REMOVE_FROM_CART_ALL:
            return {
                ...state,
                cart: [],
            }
        case "GET_APPOINTMENTS_USER":
            return {
                ...state,
                appointments: payload,
            }
        case 'persist/REHYDRATE':
            if(payload){
                return {
                    ...state,
                    status: payload.sessionReducer.status || state.status,
                    cart: payload.sessionReducer.cart || state.cart
                }
            }
            return {
                ...state
            }
        case 'GET_FEEDS':
            return{
                ...state,
                feedbacks:payload
            }
            
        default: 
        return {...state}
    }
}