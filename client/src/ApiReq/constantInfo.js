import axios from 'axios'
import {BASIC_URL} from '../constants'

export function getCategories(feat){
    return axios.get(`${BASIC_URL}/categories${feat?'?feat=true':''}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getTips(userId){
    return axios.get(`${BASIC_URL}/tips${userId ? '?userId='+userId : ''}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getReviews(userId){
    return axios.get(`${BASIC_URL}/reviews${userId ? '?userId='+userId : ''}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getCountries(){
    return axios.get(`${BASIC_URL}/countries`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function updateCategCount(data){
    return axios.put(`${BASIC_URL}/categories`,data)
      .then(r=>r.data)
      .catch(r=>r.response.data)
}