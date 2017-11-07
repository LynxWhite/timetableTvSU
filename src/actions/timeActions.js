import {GET_TIME_REQUEST} from '../constants/actionTypes'

export function getTimeOfFaculty(id) {
    return ({type: GET_TIME_REQUEST, id: id})
}
