import {getProfessionals, getProfessionalByUsername} from '../../ApiReq/professionals'
import { getSchedulesById } from '../../ApiReq/schedule';
import { Filter } from '../../Visuals/Components/SearchBarPro/Helper';
import { GET_PROFESSIONALS, GET_PROF_BY_USER,CLEAR_FILTERS, FILTER_PROF, DATA_NOT_FOUND, GET_PROF_SCHEDULE} from './../../constants'

export function getAllProfs(){
    return async function(dispatch){
        const data = await getProfessionals();
        return dispatch({
            type: GET_PROFESSIONALS,
            payload: data
        });
    };
};

export function getProfByUser(username){
    return async function(dispatch){
        const data = await getProfessionalByUsername(username);
        return dispatch({
            type: GET_PROF_BY_USER,
            payload: data
        })
    };
};
export function filterProfessional(obj,arr){
    return async function(dispatch){
        const data = Filter(obj,arr)
        
        if(data.length){
            return dispatch({
                type: FILTER_PROF,
                payload: data 
            })
        }else{
            return dispatch({
                type: DATA_NOT_FOUND, 
            }) 
        }
    }
}
export function getProfSchedule(id, token){
    return async function(dispatch){
        const data = await getSchedulesById(id, token);
        return dispatch({
            type: GET_PROF_SCHEDULE,
            payload: data
        })
    };
};

//Esta nunca es usada
export function clearFilters(){
    return async function(dispatch){
        return dispatch({
            type: CLEAR_FILTERS,
        })
    }
}