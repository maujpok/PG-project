import {getLogin} from '../../ApiReq/login';
import {CHECK_LOGIN, CLEAN_USER_LOGIN, SET_ERROR} from '../../constants';

export function checkLoginAction(userData){
    return async function(dispatch){
        const data = await getLogin(userData);
        return data.message !== "Success"?
        dispatch({
            type: SET_ERROR
        })
            :
        dispatch({
            type: CHECK_LOGIN,
            payload: data.user
        });
    };
};

export function cleanLoginCheck(){
    return {
            type:CLEAN_USER_LOGIN
        }
}
