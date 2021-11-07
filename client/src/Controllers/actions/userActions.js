import { CREATE_USER, GET_USERS, SET_ADMIN, POST_TIP, POST_REVIEW } from "../../constants";
import { createUser, getUsers, postTipUser, postReviewUser } from "../../ApiReq/users";

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



