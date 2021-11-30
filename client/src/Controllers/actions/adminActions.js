import {
    GET_ADMIN_USERS,
    DELETE_ADMIN_USERS,
    PUT_ADMIN_USERS,
    DELETE_ADMIN_APPOINTMENT,
    PUT_ADMIN_APPOINTMENT,
    POST_ADMIN_CATEGORY,
    PUT_ADMIN_CATEGORY,
    DELETE_ADMIN_CATEGORY,
    POST_ADMIN_COUNTRY,
    DELETE_ADMIN_COUNTRY,
    GET_ADMIN_TIPS,
    PUT_ADMIN_TIPS,
    DELETE_ADMIN_TIPS,
    POST_ADMIN_TIPS,
    GET_ADMIN_REVIEWS,
    PUT_ADMIN_REVIEWS,
    DELETE_ADMIN_REVIEWS
} from '../../constants';

import {
    getAllUsers,
    deleteUser,
    putUser,
    deleteAppointment,
    putAppointment,
    postCategory,
    putCategory,
    deleteCategory,
    deleteCountry,
    postCountry,
    getAllTips, deleteTip, putTip, postTip,
    getAllReviews, deleteReview, putReview,
    getAllInvoices, getAllReports, setCategoriesCount
} from '../../ApiReq/admin'
import { getAllCategories } from './constantInfoActions';

export function getAdminUsers(token){
    return async function(dispatch){
        let data = await getAllUsers(token)
        return dispatch({
            type: GET_ADMIN_USERS,
            payload: data
        })
    }
}
export function delAdminUser(username, token){
    return async function(dispatch){
        let data = await deleteUser(username, token)
        return dispatch({
            type: DELETE_ADMIN_USERS,
            payload: data
        })
    }
}
export function putAdminUser(username, info, token){
    return async function(dispatch){
        let data = await putUser(username,info, token)
        return dispatch({
            type: PUT_ADMIN_USERS,
            payload: data
        })
    }
}

export function delAdminAppointment(appointmentID, token){
    return async function(dispatch){
        let data = await deleteAppointment(appointmentID, token)
        return dispatch({
            type: DELETE_ADMIN_APPOINTMENT,
            payload: data
        })
    }
}
export function putAdminAppointment(appointmentID,info, token){
    return async function(dispatch){
        let data = await putAppointment(appointmentID,info, token)
        return dispatch({
            type: PUT_ADMIN_APPOINTMENT,
            payload: data
        })
    }
}

export function postAdminCategory(category, token){
    return async function(dispatch){
        let data = await postCategory(category, token)
        return dispatch({
            type: POST_ADMIN_CATEGORY,
            payload:data
        })
    }
}
export function putAdminCategory(categoryID, info, token){
    return async function(dispatch){
        let data = await putCategory(categoryID, info, token)
        return dispatch({
            type: PUT_ADMIN_CATEGORY,
            payload:data
        })
    }
}
export function deleteAdminCategory(categoryID, token){
    return async function(dispatch){
        let data = await deleteCategory(categoryID, token)
        return dispatch({
            type: DELETE_ADMIN_CATEGORY,
            payload:data
        })
    }
}

export function postAdminCountry(info, token){
    return async function(dispatch){
        let data = await postCountry(info, token)
        return dispatch({
            type: POST_ADMIN_COUNTRY,
            payload:data
        })
    }
}
export function deleteAdminCountry(countryId, token){
    return async function(dispatch){
        let data = await deleteCountry(countryId, token)
        return dispatch({
            type: DELETE_ADMIN_COUNTRY,
            payload:data
        })
    }
}

export function getAdminTips(token){
    return async function(dispatch){
        let data = await getAllTips(token)
        return dispatch({
            type: GET_ADMIN_TIPS,
            payload: data
        })
    }
}
export function putAdminTip(info, _id, token){
    return async function (dispatch){
        let data = await putTip(info, _id, token)
        return dispatch({
            type: PUT_ADMIN_TIPS,
            payload: data
        })
    }
}
export function deleteAdminTip(_id, token){
    return async function (dispatch){
        let data = await deleteTip(_id, token)
        return dispatch({
            type: DELETE_ADMIN_TIPS,
            payload: data
        })
    }
}
export function postAdminTip(info, token){
    return async function(dispatch){
        let data = await postTip(info, token)
        return dispatch({
            type: POST_ADMIN_TIPS,
            payload:data
        })
    }
}

export function getAdminReviews(token){
    return async function(dispatch){
        let data = await getAllReviews(token)
        return dispatch({
            type: GET_ADMIN_REVIEWS,
            payload: data
        })
    }
}
export function putAdminReview(info, _id, token){
    return async function (dispatch){
        let data = await putReview(info, _id, token)
        return dispatch({
            type: PUT_ADMIN_REVIEWS,
            payload: data
        })
    }
}
export function deleteAdminReview(_id, token){
    return async function (dispatch){
        let data = await deleteReview(_id, token)
        return dispatch({
            type: DELETE_ADMIN_REVIEWS,
            payload: data
        })
    }
}
export function getAdminInvoices(token){
    return async function(dispatch){
        let data = await getAllInvoices(token)
        return dispatch({
            type: "GET_ADMIN_INVOICES",
            payload: data
        })
    }
}
export function getAdminReports(token){
    return async function(dispatch){
        let data = await getAllReports(token)
        return dispatch({
            type: "GET_ADMIN_REPORTS",
            payload: data
        })
    }
}
export function adminSetCategCount(token) {
    return async function (dispatch) {
        await setCategoriesCount(token)
        return dispatch(getAllCategories())
    }
}