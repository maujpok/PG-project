import {
    GET_ADMIN_USERS,
    DELETE_ADMIN_USERS,
    PUT_ADMIN_USERS,
    DELETE_ADMIN_APPOINTMENT,
    PUT_ADMIN_APPOINTMENT,
    POST_ADMIN_CATEGORY,
    PUT_ADMIN_CATEGORY,
    DELETE_ADMIN_CATEGORY,
  DELETE_ADMIN_COUNTRY,
  POST_ADMIN_COUNTRY,
    PUT_ADMIN_TIPS,GET_ADMIN_TIPS,DELETE_ADMIN_TIPS,POST_ADMIN_TIPS,
    GET_ADMIN_REVIEWS,PUT_ADMIN_REVIEWS,DELETE_ADMIN_REVIEWS
} from '../../constants'

const initialState = {
    adminUsers: [],
    userDeleted: {},
    userModified: {},
    appointmentDeleted: {},
    appointmentModified: {},
    categoryPosted: {},
    categoryModified: {},
    categoryDeleted: {},
    countryDeleted: {},
    countryPosted: {},
    adminTips:[],
    tipPosted:{},
    tipModified:{},
    tipDeleted:{},
    adminReviews:[],
    reviewModified:{},
    reviewDeleted:{},
    adminInvoices:[],
    adminReports:[]
}

export default function adminReducer(state=initialState,{type,payload}){
    switch(type){
        case GET_ADMIN_USERS:
            return {
                ...state,
                adminUsers: payload
            }
        case DELETE_ADMIN_USERS:
            return{
                ...state,
                userDeleted: payload
            }
        case PUT_ADMIN_USERS:
            return {
                ...state,
                userModified: payload
            }
        case DELETE_ADMIN_APPOINTMENT:
            return {
                ...state,
                appointmentDeleted: payload
            }
        case PUT_ADMIN_APPOINTMENT:
            return {
                ...state,
                appointmentModified: payload
            }
        case POST_ADMIN_CATEGORY:
            return { 
                ...state,
                categoryPosted: payload
            }
        case PUT_ADMIN_CATEGORY:
            return {
                ...state,
                categoryModified: payload
            }
        case DELETE_ADMIN_CATEGORY:
            return {
                ...state,
                categoryDeleted: payload
            }
        case DELETE_ADMIN_COUNTRY:
            return {
                ...state,
                countryDeleted: payload
            }
        case POST_ADMIN_COUNTRY:
            return {
                ...state,
                countryPosted: payload
            }
        case GET_ADMIN_TIPS:
            return {
                ...state,
                adminTips: payload
            }
        case PUT_ADMIN_TIPS:
            return {
                ...state,
                tipModified: payload
            }
        case POST_ADMIN_TIPS:
            return {
                ...state,
                tipPosted: payload
            }
        case DELETE_ADMIN_TIPS:
            return {
                ...state,
                tipDeleted: payload
            }
        case GET_ADMIN_REVIEWS:
            return {
                ...state,
                adminReviews: payload
            }
        case PUT_ADMIN_REVIEWS:
            return {
                ...state,
                reviewModified: payload
            }
        case DELETE_ADMIN_REVIEWS:
            return {
                ...state,
                reviewDeleted: payload
            }
        case "GET_ADMIN_INVOICES":
            return {
                ...state,
                adminInvoices: payload
            }
        case "GET_ADMIN_REPORTS":
            return {
                ...state,
                adminReports: payload
            }
        default:
            return {
                ...state
            }
    }
}