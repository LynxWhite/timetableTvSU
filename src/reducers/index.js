import { combineReducers } from 'redux'
import test from './test'
import faculties from './faculties'

const rootReducer = combineReducers({
    test,
    faculties
})

export default rootReducer
