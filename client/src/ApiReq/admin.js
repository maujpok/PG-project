import axios from 'axios';
import {BASIC_URL} from '../constants'

const url = `${BASIC_URL}/admin`;

export function getAllUsers(token){
    return axios.get(`${url}/users`, {headers: {jwt: token}, withCredentials: true})
    .then(r => r.data)
    .catch(err=>err.response.data)
};

export function deleteUser(username, token){
    return axios.delete(`${url}/users/${username}`, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function putUser(username, info, token){
    return axios.put(`${url}/users/${username}`, info, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function deleteAppointment(appointmentID, token){
    return axios.delete(`${url}/appointment/${appointmentID}`, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function putAppointment(appointmentID, info, token){
    return axios.put(`${url}/appointment/${appointmentID}`, info, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function postCategory(category, token){
    return axios.post(`${url}/category`, category, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function putCategory(categoryID, info, token){
    return axios.put(`${url}/category/${categoryID}`, info, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function setCategoriesCount(token) {
    return axios.put(`${url}/category/set`, null, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function deleteCategory(categoryID, token){
    return axios.delete(`${url}/category/${categoryID}`, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data)
}
export function postCountry(info, token){
    return axios.post(`${BASIC_URL}/countries`, info, {headers: {jwt: token}, withCredentials: true})
      .then(r=>r.data)
      .catch(r=>r.response.data)
}
export function deleteCountry(_id, token){
    return axios.delete(`${BASIC_URL}/countries/${_id}`, {headers: {jwt: token}, withCredentials: true})
      .then(r=>r.data)
      .catch(r=>r.response.data)
}
export function getAllTips(token){
    return axios.get(`${url}/tips`, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function putTip(info, _id, token){
    return axios.put(`${url}/tips/${_id}`, info, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function deleteTip(_id, token){
    return axios.delete(`${url}/tips/${_id}`, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function postTip(info, token){
    return axios.post(`${url}/tips`, info, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function getAllReviews(token){
    return axios.get(`${url}/reviews`, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function deleteReview(_id, token){
    return axios.delete(`${url}/reviews/${_id}`, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function putReview(info, _id, token){
    return axios.put(`${url}/reviews/${_id}`, info, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function getAllInvoices(token){
    return axios.get(`${url}/invoices`, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}
export function getAllReports(token){
    return axios.get(`${url}/reports`, {headers: {jwt: token}, withCredentials: true})
      .then(r => r.data)
      .catch(err=>err.response.data)
}