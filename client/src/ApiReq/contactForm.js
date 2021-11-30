import {BASIC_URL} from './../constants'
import axios from 'axios'

export function postContactForm(obj){
    return axios.post(`${BASIC_URL}/contact`, obj, {withCredentials: false})
    .then(r=>r.data)
    .catch(r => r.response.data)
};