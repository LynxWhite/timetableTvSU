import {GET_DIRECTIONS_OF_FACULTY_REQUEST} from '../constants/actionTypes'

export function getDirectionsOfFaculty(id) {
    return ({type: GET_DIRECTIONS_OF_FACULTY_REQUEST, id: id})
}
