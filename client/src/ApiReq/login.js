//Request para verificar que un nombre de usuario existe
import {BASIC_URL} from './../constants'
import axios from 'axios'

export function getLogin({username,password}){
    return axios.post(`${BASIC_URL}/login/signin`, { username, password })
    .then(r=>r.data)
    .catch(r => r.response.data)
}
