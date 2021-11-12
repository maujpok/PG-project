
import { CREATE_USER, GET_USERS, PUT_USER, SET_PROFESSIONAL } from "../../constants";
import { createUser, getUsers, updateUserData } from "../../ApiReq/users";


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
};

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
};

//post tips


