import axios from 'axios';
import {BASIC_URL} from '../constants';

export async function addtoSchedule(date, token) {
    const data = await axios.post(`${BASIC_URL}/schedules/many`, date, {headers: {jwt: token}, withCredentials: true});
    return data;
}

export async function getSchedulesById(id, token){
    return axios.get(`${BASIC_URL}/schedules/${id}/true`, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export async function getSchedulesByOnlyId(id, token){
    return axios.get(`${BASIC_URL}/schedules/${id}`, {headers: {jwt: token}, withCredentials: true})
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export async function setAvailability(id,value,token){
    const data= await axios.put(`${BASIC_URL}/schedules/${id}`,{value}, {headers: {jwt: token}, withCredentials: true})
    return data
}

export async function deleteSchedulebyId(id, token){
    const data= await axios.delete(`${BASIC_URL}/schedules/${id}`, {headers: {jwt: token}, withCredentials: true})
    return data
}