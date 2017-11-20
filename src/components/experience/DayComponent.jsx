import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
    flex: 1
}

class DayComponent extends Component {
    render() {
        const times = ['', ...this.props.times]
        const dayTimeTable = {}
        const growLenght = this.props.directions.length + 1
        console.log(growLenght)
        times.map((time, key) => {
            this.props.directions.map((direction, dkey) => {
                if (!(this.props.timetableExample
                    && this.props.timetableExample[direction.abbr_key]
                    && this.props.timetableExample[direction.abbr_key][time])
                    || key === 0
                ) {
                    const objects = {name: 'null', grow: 1}
                    const timeObject = {[time]: objects}
                    dayTimeTable[direction.abbr_key] = Object.assign({}, dayTimeTable[direction.abbr_key], timeObject) 
                    return
                }
                if (dkey > 0 
                    && this.props.timetableExample[direction.abbr_key][time].name === dayTimeTable[this.props.directions[dkey - 1].abbr_key][time].name
                ) {
                    console.log('Условие сработало')
                    dayTimeTable[this.props.directions[dkey - 1].abbr_key][time].grow += 1
                    return
                }
                const timeObject = {[time]: Object.assign({}, this.props.timetableExample[direction.abbr_key][time], {grow: 1})}
                dayTimeTable[direction.abbr_key] = Object.assign({}, dayTimeTable[direction.abbr_key], timeObject)
            })
        })
        console.log(dayTimeTable)
        return (
            <div style={containerStyle}>
                <h4 className='title is-4' style={{backgroundColor: 'green'}}> {this.props.day} </h4>
                <div style={containerStyle}> 
                    {times.map((time, key) => (
                        <div key={key} style={columnStyle}>
                            <div style={itemStyle}>{time}</div>
                            {!time && this.props.directions.map((direction, dkey) => (
                                <div key={dkey} style={itemStyle}>
                                    {direction.abbr}
                                </div>
                            ))}
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
        )
    }
}

DayComponent.propTypes = {
    day: PropTypes.string,
    times: PropTypes.array,
    directions: PropTypes.array,
    timetableExample: PropTypes.object
}

export default DayComponent
