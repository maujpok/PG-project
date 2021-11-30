
import { CREATE_USER, GET_USERS, PUT_USER, SET_PROFESSIONAL } from "../../constants";
import { createUser, getUsers, updateUserData,getAppointmentsUser, getFeedbacks, postFeedbacks } from "../../ApiReq/users";
import {updateSession} from "../../ApiReq/professionals";


export const createUserAction = (user) => {
    return (dispatch) => {
        const data = createUser(user)
        return dispatch({
            type: CREATE_USER, 
            payload: data
        })
    }
}

export function getAllUsers(){
    return async function(dispatch){
        const data = await getUsers();
        return dispatch({
            type: GET_USERS,
            payload: data
        });
    };
}

export function putUser(username, body){
    const response = updateUserData(username, body);
    return {
        type: PUT_USER,
        payload : response
    };
};

export function setProfessional(username, body){
    return {
        type: SET_PROFESSIONAL
    };
}

export function getAppointments(userId,as,token){
    return async function(dispatch){
        const data = await getAppointmentsUser(userId,as,token);
        return dispatch({
            type: "GET_APPOINTMENTS_USER",
            payload: data
        });
    };
}

export function getFeeds(customerId, professionalId, token){
    return async function(dispatch){
        const data = await getFeedbacks(customerId, professionalId, token);
        return dispatch({
            type: 'GET_FEEDS',
            payload:data
        })
    }
}

export function postFeed(feedback, token){
    return async function(dispatch){
        const data = await postFeedbacks( feedback, token);
        return dispatch({
            type: 'POST_FEEDBACK',
            payload:data
        })
    }
}
//post tips
export function updateSessionCount(profId,token){
    const response = updateSession(profId,token);
    return {
        type: 'UPDATE_SESSION',
        payload : response
    };
};


