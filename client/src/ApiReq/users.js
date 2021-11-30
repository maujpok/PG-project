import axios from 'axios';
import {BASIC_URL} from '../constants';

export function createUser(user) {
    return axios.post(`${BASIC_URL}/users`, user)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function getUsers() {
    return axios.get(`${BASIC_URL}/users`)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function getSingleUser(username) {
    return axios.get(`${BASIC_URL}/users/${username}`)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function postTipUser(content, token){
    return axios.post(`${BASIC_URL}/tips`, content, {headers:{jwt:token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function deleteTipUser(tipId,token){
    return axios.delete(`${BASIC_URL}/tips/${tipId}`, {headers:{jwt:token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)

}

export function postReviewUser(content,token){
    return axios.post(`${BASIC_URL}/reviews`, content,{headers:{jwt:token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data);
}


export function updateReviewUser({text,reviewId,rate,token}){
    return axios.put(`${BASIC_URL}/reviews/${reviewId}`, {text,rate}, {headers:{jwt:token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}


export function updateUserData(username, body){
    return axios.put(`${BASIC_URL}/users/${username}`, body, {headers: {jwt: body.token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function updateUserPass(username, body){
    return axios.put(`${BASIC_URL}/users/${username}/password`, {...body,force:true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export async function checkPassword({username, password, token, newPassword}){
    const response = await axios.post(`${BASIC_URL}/users/${username}/check`, {password, newPassword}, {headers: {jwt: token}, withCredentials: true})
    return response
}
export function getAppointmentsUser(userId,as,token){
    return axios.get(`${BASIC_URL}/appointment/${userId}${as?'?as=prof':''}`,{headers: {jwt: token}, withCredentials: true})
        .then(r=>r.data)
        .catch(r=>r.response.data)
}

export function getFeedbacks(customerId, professionalId, token){
    return axios.get(`${BASIC_URL}/feedback?customerId=${customerId}&professionalId=${professionalId}`,{headers: {jwt: token}, withCredentials: true})
        .then(r=>r.data)
        .catch(r=>r.response.data)
}

export function postFeedbacks(feedback, token){
    return axios.post(`${BASIC_URL}/feedback`, feedback, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}