import axios from 'axios'
import {BASIC_URL} from '../constants'

export function postCartInfo(obj,token){
    return axios.post(`${BASIC_URL}/invoice`,obj,{headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r => r.response.data)
}

export  function getCartInfo(customerId,pro,token){
    if(pro){
        return  axios.get(`${BASIC_URL}/invoice/${customerId}?as=prof`, {headers: {jwt: token}, withCredentials: true})
        .then(r => r.data)
        .catch(r => r.response.data)
    }else{
        return  axios.get(`${BASIC_URL}/invoice/${customerId}`,{headers: {jwt: token}, withCredentials: true})
        .then(r => r.data)
        .catch(r => r.response.data)
    }
}