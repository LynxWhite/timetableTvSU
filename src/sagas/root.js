import { call, put, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/actionTypes'
import * as Api from '../api/getData'

function* getFaculties() {
    try {
        const response = yield call(Api.getFaculties)
        yield put({type: ActionTypes.GET_FACULTIES_SUCCESS, payload: response})
        
        for (let i = 0; i < response.length; i++) {
            yield put({type: ActionTypes.GET_DIRECTIONS_OF_FACULTY_REQUEST, id: response[i]._id})
            yield put({type: ActionTypes.GET_TIME_REQUEST, id: response[i]._id})
        }
    }
    catch (e) {
        yield put({type: ActionTypes.GET_FACULTIES_FAILED, message: e.message})
    }
}

function* getDirectionsOfFaculty(data) {
    try {
        const response = yield call(Api.getDirectionsOfFaculry, data.id)
        yield put({type: ActionTypes.GET_DIRECTIONS_OF_FACULTY_SUCCESS, payload: response, _id: data.id})
    }
    catch (e) {
        yield put({type: ActionTypes.GET_DIRECTIONS_OF_FACULTY_FAILED, message: e.message})
    }
}

function* getTimeOfFaculty(data) {
    try {
        const response = yield call(Api.getTimeOfFaculty, data.id)
        yield put({type: ActionTypes.GET_TIME_SUCCESS, payload: response, _id: data.id})
    }
    catch (e) {
        yield put({type: ActionTypes.GET_TIME_FAILED, message: e.message})
    }
}

export default function* root() {
    yield takeEvery(ActionTypes.GET_FACULTIES_REQUEST, getFaculties)
    yield takeEvery(ActionTypes.GET_DIRECTIONS_OF_FACULTY_REQUEST, getDirectionsOfFaculty)
    yield takeEvery(ActionTypes.GET_TIME_REQUEST, getTimeOfFaculty)
    console.log('Saga started')
}
