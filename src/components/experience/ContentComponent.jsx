import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayComponent from './DayComponent'

const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]

class ContentComponent extends Component {
    render() {
        return (
            <div>
                <h1 className='title is-2'> Табличка </h1>
                {week.map((day, key)=>(
                    <DayComponent
                        day={day}
                        key={key}
                        times={this.props.times}
                        directions={this.props.directions}
                        timetableExample={this.props.timetableExample[day]}
                    />
                ))}
            </div>
        )
    }
}

ContentComponent.propTypes = {
    times: PropTypes.array,
    directions: PropTypes.array,
    timetableExample: PropTypes.object
}

export default ContentComponent
