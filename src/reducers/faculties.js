import {GET_FACULTIES_SUCCESS} from '../constants/actionTypes'

const initialState = [

]

export default function footer(state = initialState, action) {
    switch (action.type) {
        case GET_FACULTIES_SUCCESS:
            return action.payload
        default:
            return state
    }
}