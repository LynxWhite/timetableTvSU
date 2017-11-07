import {GET_FACULTIES_SUCCESS, GET_DIRECTIONS_OF_FACULTY_SUCCESS} from '../constants/actionTypes'

const initialState = [

]

export default function footer(state = initialState, action) {
    switch (action.type) {
        case GET_FACULTIES_SUCCESS:
            return action.payload
        case GET_DIRECTIONS_OF_FACULTY_SUCCESS:
            console.log('wtf')
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
        default:
            return state
    }
}
