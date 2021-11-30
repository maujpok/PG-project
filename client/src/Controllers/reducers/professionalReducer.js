
import { GET_PROFESSIONALS,CLEAR_FILTERS, GET_PROF_BY_USER, FILTER_PROF,DATA_NOT_FOUND, GET_PROF_SCHEDULE} from './../../constants'

const initialState = {
    professionals: [],
    professionalsRender: [],
    profDetail: {},
    profSchedule:{},
    error: false
}

export default function professionalReducer(state=initialState,{type,payload}){
    switch (type){
        case GET_PROFESSIONALS:
            return {
                ...state,
                professionals: payload,
                professionalsRender: payload,
                error:false
            }
        case GET_PROF_BY_USER:
            return{
                ...state,
                profDetail: payload,
                error:false

            }
        case FILTER_PROF:
            return{
                ...state,
                professionalsRender:payload,
                error:false
            }
        case GET_PROF_SCHEDULE:
            return{
                ...state,
                profSchedule: payload
            }
        case DATA_NOT_FOUND:
            return{
                ...state,
                error:true
            }
        case CLEAR_FILTERS:
            console.log(initialState.professionals)
            return{
                ...state,
                professionalsRender:state.professionals,
                error:false
            }
        default:
            return {...state}
    }
}