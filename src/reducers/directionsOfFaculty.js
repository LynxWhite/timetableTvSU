import {GET_DIRECTIONS_OF_FACULTY_SUCCESS} from '../constants/actionTypes'

const initialState = [

]

export default function footer(state = initialState, action) {
    switch (action.type) {
        case GET_DIRECTIONS_OF_FACULTY_SUCCESS:
            return action.payload
        default:
            return state
    }
}
