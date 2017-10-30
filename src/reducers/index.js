import { combineReducers } from 'redux'
import test from './test'
import faculties from './faculties'
import directionsOfFaculty from './directionsOfFaculty'

const rootReducer = combineReducers({
    test,
    directionsOfFaculty,
    faculties
})

export default rootReducer
