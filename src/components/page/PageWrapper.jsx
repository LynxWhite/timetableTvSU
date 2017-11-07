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
        console.log(this.props.faculties)
        return (
            <div>
                <PageHeader/>
                {
                    week.map((dayName, key)=>(
                        <div key = {key}>
                            <h3> {dayName} </h3>
                            <DayTable day={dayName} />
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
