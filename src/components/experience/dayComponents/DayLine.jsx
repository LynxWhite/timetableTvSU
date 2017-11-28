import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayDirectionInLine from './DayDirectionInLine'

class DayLine extends Component {
    componentDidMount() {
        if (this.props.directions) {
            const cellWidth = 100 / this.props.directions.length
            this.setState({wrapperStyle: Object.assign(
                {}, 
                this.state.wrapperStyle, 
                {gridTemplateColumns: 'repeat(' + this.props.directions.length + ', ' + cellWidth + '%)'})})
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.directions !== nextProps.directions) {
            const cellWidth = 100 / nextProps.directions.length
            this.setState({wrapperStyle: Object.assign(
                {}, 
                this.state.wrapperStyle, 
                {gridTemplateColumns: 'repeat(' + nextProps.directions.length + ', ' + cellWidth + '%)'})})
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            wrapperStyle: {
                display: 'grid',
                gridTemplateColumns: '100px 100px 100px',
                gridTemplateRows: '50px 50px',
                backgroundColor: 'green',
                width: '100%'
            }
        }
        this.subjectsColumnSpan = {} 
    }

    render() {
        const {timeTable, directions} = this.props
        // console.log('timetable', timeTable)
        directions.map((direction, key) => {
            const minusSpan = 1
            const plusSpan = 1
            this.subjectsColumnSpan[direction.abbr_key] = {'-': minusSpan, '+': plusSpan}
        })

        directions.map((direction, key) => {
            let stopMinus = false
            let stopPlus = false
            for (let i = key + 1; i < directions.length; i++) {
                const someDirection = directions[i]
                if (!timeTable[someDirection.abbr_key] || !timeTable[direction.abbr_key]) {break}
                if (timeTable[someDirection.abbr_key]['-']
                    && timeTable[direction.abbr_key]['-']
                    && timeTable[someDirection.abbr_key]['-'].name === timeTable[direction.abbr_key]['-'].name
                    && this.subjectsColumnSpan[direction.abbr_key]['-'] !== 0
                    && !stopMinus
                ) {
                    this.subjectsColumnSpan[direction.abbr_key]['-'] += 1
                    this.subjectsColumnSpan[someDirection.abbr_key]['-'] = 0
                } else {stopMinus = true}
                if (timeTable[someDirection.abbr_key]['+']
                && timeTable[direction.abbr_key]['+']
                && timeTable[someDirection.abbr_key]['+'].name === timeTable[direction.abbr_key]['+'].name
                && this.subjectsColumnSpan[direction.abbr_key]['+'] !== 0
                && !stopPlus
                ) {
                    this.subjectsColumnSpan[direction.abbr_key]['+'] += 1
                    this.subjectsColumnSpan[someDirection.abbr_key]['+'] = 0
                } else {stopPlus = true}
            }
        })

        console.log('span', this.subjectsColumnSpan)
        console.log('time', this.props.time)
        console.log('timetable', this.props.timeTable)
        return (
            <div style={this.state.wrapperStyle}>
                {directions.map((direction, key) => (
                    <DayDirectionInLine
                        key={key}
                        data={timeTable[direction.abbr_key]}
                        week={'-'}
                        colSpan={this.subjectsColumnSpan[direction.abbr_key]}
                        index={key}
                    />
                ))}        
                {directions.map((direction, key) => (
                    <DayDirectionInLine
                        key={key}
                        data={timeTable[direction.abbr_key]}
                        week={'+'}
                        colSpan={this.subjectsColumnSpan[direction.abbr_key]}
                        index={key}
                    />
                ))}
            </div>      
        )
    }
}

/*
<table className='table is-bordered is-fullwidth is-hoverable' style={{marginBottom: '0'}}> 
                <tbody>
                    <tr>
                        {directions.map((direction, key) => (
                            <DayDirectionInLine
                                key={key}
                                data={timeTable[direction.abbr_key]}
                                week={'-'}
                                colSpan={this.subjectsColumnSpan[direction.abbr_key]}
                            />
                        ))}
                    </tr>
                    <tr>
                        {directions.map((direction, key) => (
                            <DayDirectionInLine
                                key={key}
                                data={timeTable[direction.abbr_key]}
                                week={'+'}
                                colSpan={this.subjectsColumnSpan[direction.abbr_key]}
                            />
                        ))}
                    </tr>
                </tbody>
            </table>
*/

DayLine.propTypes = {
    directions: PropTypes.array,
    timeTable: PropTypes.object,
    time: PropTypes.string
}

export default DayLine
