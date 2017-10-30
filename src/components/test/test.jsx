import React, {Component} from 'react'


import { connect } from 'react-redux'
import { getFaculties } from '../../actions/facultiesActions'
import { getDirectionsOfFaculty } from '../../actions/directionsActions'

class Test extends Component {
    componentDidMount() {
        this.props.getFaculties()
    }
    render() {
        return (
            <div>
                Тест
                <select onChange={(e)=>{this.props.getDirectionsOfFaculty(e.target.value)}}>
                    {this.props.faculties.map((faculty, key)=>(
                        <option value={faculty._id} key={'direction_' + key}>{faculty.name}</option>
                    ))}
                </select>
                <ul>
                    {this.props.directions.map((direction, key) => (
                        <li key={'li_direction_' + key}>{direction.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        directions: state.directionsOfFaculty
    }),
    {getFaculties, getDirectionsOfFaculty}
)(Test)
