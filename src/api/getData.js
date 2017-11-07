import axios from 'axios'

export function getFaculties() {
    return axios.get('http://127.0.0.1:1337/faculties')
        .then(res => {
            return res.data
        })
}

export function getDirectionsOfFaculry(id) {
    return axios.get('http://127.0.0.1:1337/directions/' + id)
        .then(res => {
            return res.data
        })
}
