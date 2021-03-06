import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayHeader from './DayHeader'
import DayLine from './DayLine'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const columnStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eee'
}

const itemStyle = {
    width: '100px',
    border: '1px solid black'
}

class DayComponent extends Component {
    render() {
        const times = [...this.props.times]
        return (
            <div style={containerStyle}>
                <h4 className='title is-4' style={{backgroundColor: 'green', margin: 0}}> {this.props.day} </h4>
                <div style={containerStyle}> 
                    <DayHeader
                        directions={this.props.directions}
                    />
                    {times.map((time, key) => (
                        <div key={key} style={columnStyle}>
                            <div style={itemStyle}>{time}</div>
                            { this.props.timetableExample ?
                                <DayLine
                                    directions={this.props.directions}
                                    timeTable={this.props.timetableExample[time]}
                                    time={time}
                                />
                                : null
                            }
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

/*
 <div style={containerStyle}>
                <h4 className='title is-4' style={{backgroundColor: 'green', margin: 0}}> {this.props.day} </h4>
                <div style={containerStyle}> 
                    <DayHeader
                        directions={this.props.directions}
                    />
                    {times.map((time, key) => (
                        <div key={key} style={columnStyle}>
                            <div style={itemStyle}>{time}</div>
                            {time && this.props.directions.map((direction, dkey) => (
                                dayTimeTable[direction.abbr_key][time] &&
                                <div key={dkey} style={Object.assign({}, itemStyle, {flex: dayTimeTable[direction.abbr_key][time].grow})}>
                                    {dayTimeTable[direction.abbr_key][time].name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
*/

DayComponent.propTypes = {
    day: PropTypes.string,
    times: PropTypes.array,
    directions: PropTypes.array,
    timetableExample: PropTypes.object
}

export default DayComponent
