import React, {Component} from 'react'
import PageHeader from './PageHeader'
import DayTable from './DayTable'

import {week} from '../../constants/week'

import { connect } from 'react-redux'
import { getFaculties } from '../../actions/facultiesActions'

import PropTypes from 'prop-types'

class PageWrapper extends Component {
    componentDidMount() {
        this.props.getFaculties()
    }

    render() {
        let directions = []
        let time = []
        if (this.props.faculties.length)
            this.props.faculties.map(faculty => {
                if (faculty.abbr_key === 'PMK') {
                    directions = faculty.directions
                    time = faculty.time
                }
            })
        console.log(this.props.faculties, directions, time)
        return (
            <div>
                <PageHeader/>
                {
                    week.map((dayName, key)=>(
                        <div key = {key}>
                            <h3> {dayName} </h3>
                            <DayTable day={dayName} directions={directions} time={time}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

PageWrapper.propTypes = {
    getFaculties: PropTypes.func,
    faculties: PropTypes.array
}

export default connect(
    state => ({
        faculties: state.faculties,
        directions: state.directionsOfFaculty
    }), 
    {getFaculties}
)(PageWrapper)
