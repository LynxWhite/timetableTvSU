import { call, put, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/actionTypes'
import * as Api from '../api/getData'

function* getFaculties() {
    try {
        const response = yield call(Api.getFaculties)
        yield put({type: ActionTypes.GET_FACULTIES_SUCCESS, payload: response})
    }
    catch (e) {
        yield put({type: ActionTypes.GET_FACULTIES_FAILED, message: e.message})
    }
}

function* getDirectionsOfFaculty(data) {
    try {
        const response = yield call(Api.getDirectionsOfFaculry, data.id)
        yield put({type: ActionTypes.GET_DIRECTIONS_OF_FACULTY_SUCCESS, payload: response})
    }
    catch (e) {
        yield put({type: ActionTypes.GET_DIRECTIONS_OF_FACULTY_FAILED, message: e.message})
    }
}

export default function* root() {
    yield takeEvery(ActionTypes.GET_FACULTIES_REQUEST, getFaculties)
    yield takeEvery(ActionTypes.GET_DIRECTIONS_OF_FACULTY_REQUEST, getDirectionsOfFaculty)
    console.log('Saga started')
}
