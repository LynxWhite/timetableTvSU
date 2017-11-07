import {GET_FACULTIES_SUCCESS, GET_DIRECTIONS_OF_FACULTY_SUCCESS, GET_TIME_SUCCESS} from '../constants/actionTypes'

const initialState = [

]

export default function footer(state = initialState, action) {
    switch (action.type) {
        case GET_FACULTIES_SUCCESS:
            return action.payload
        case GET_DIRECTIONS_OF_FACULTY_SUCCESS:
            return [
                ...state.map((faculty, index) => {
                    if (faculty._id === action._id) {
                        const newFaculty = Object.assign({}, faculty)
                        newFaculty.directions = action.payload
                        return newFaculty
                    }
                    return faculty
                })
            ]
        case GET_TIME_SUCCESS:
            return [
                ...state.map((faculty, index) => {
                    if (faculty._id === action._id) {
                        const newFaculty = Object.assign({}, faculty)
                        newFaculty.time = action.payload
                        return newFaculty
                    }
                    return faculty
                })
            ]
        default:
            return state
    }
}
