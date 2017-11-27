import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayDirectionInLine from './DayDirectionInLine'

class DayLine extends Component {
    constructor(props) {
        super(props)
        this.subjectsColumnSpan = {}     
    }

    /*
    calculateColSpan = (directionIndex, week) => {
        const {timetable, directions} = this.props
        if (!timeTable[directions[directionIndex]] || !timeTable[directions[directionIndex]][week]) {return 1}
        let prevCounter = []
        for (let i = 0; i < directionIndex; i++) {
            prevCounter.push(this.calculateColSpan(i, week))
        }
        let checkCount = 1
        if (prevCounter[prevCounter.length - 1] > checkCount) {return 0}
        for (let i = directionIndex + 1; i < directions.length; i++) {
            if (timeTable[directions[i]]
                && timeTable[directions[i]][week]
                && timeTable[directions[i]][week].name === timeTable[directions[directionIndex]][week].name
            ) {
                counter ++
            } else {return counter}
        }
    }
    */
    render() {
        /*
        console.log('directions: ', this.props.directions)
        console.log('items: ', this.props.timeTable)
        const minusLine = []
        const plusLine  = []
        const bothLine  = []
        // 1) Объединение по вертикали
        this.props.directions.map((direction, key) => {
            if (this.props.timeTable[direction.abbr_key]
                && this.props.timeTable[direction.abbr_key]['-']
                && this.props.timeTable[direction.abbr_key]['+']
                && this.props.timeTable[direction.abbr_key]['-'][0].name === this.props.timeTable[direction.abbr_key]['+'][0].name) {
                bothLine.push({ subjects: this.props.timeTable[direction.abbr_key]['-'], heightFlex: 2})
            } else {
                bothLine.push({ subjects: this.props.timeTable[direction.abbr_key], heightFlex: 1})
            }
        })
        */

        // console.log('объединение: ', bothLine)
        const {timeTable, directions} = this.props
        console.log('timetable', timeTable)
        directions.map((direction, key) => {
            const minusSpan = 1
            const plusSpan = 1
            this.subjectsColumnSpan[direction.abbr_key] = {'-': minusSpan, '+': plusSpan}
        })

        directions.map((direction, key) => {
            // this.subjectsColumnSpan[direction.abbr_key] = {'-': minusSpan, '+': plusSpan}
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
                    console.log(timeTable[someDirection.abbr_key]['+'].name, timeTable[direction.abbr_key]['+'].name, someDirection.abbr_key, direction.abbr_key)
                    this.subjectsColumnSpan[direction.abbr_key]['+'] += 1
                    this.subjectsColumnSpan[someDirection.abbr_key]['+'] = 0
                } else {stopPlus = true}
            }
        })

        console.log('span', this.subjectsColumnSpan)
        console.log('time', this.props.time)
        console.log('timetable', this.props.timeTable)
        return (
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
        )
    }
}

/*
<div style={oneLineContainerStyle}>
                {bothLine.map((items, key)=>(
                    items.heightFlex === 1 ? (
                        items.subjects ? (
                            <div key={key} style={containerStyle}>
                                <div style={itemStyle}>
                                    {items.subjects['-'] && items.subjects['-'].map((subject, skey) => (
                                        <div key={skey} style={itemStyle}>
                                            {subject.name + ' -'}
                                        </div>
                                    ))}
                                </div>
                                <div style={itemStyle}>
                                    {items.subjects['+'] && items.subjects['+'].map((subject, skey) => (
                                        <div key={skey} style={itemStyle}>
                                            {subject.name + ' +'}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div key={key} style={itemStyle} />
                        )
                    ) : (
                        <div key={key} style={containerStyle}>
                            {items.subjects.map((subject, skey) => (
                                <div key={skey} style={itemStyle}>
                                    {subject.name}
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
*/

/*
<div style={containerStyle}>
                <div style={oneLineContainerStyle}>
                    {this.props.directions.map((direction, key) => (
                        <div key={key} style={itemStyle}> 
                            {this.props.timeTable[direction.abbr_key] 
                                && this.props.timeTable[direction.abbr_key]['-']
                                && this.props.timeTable[direction.abbr_key]['-'][0].name || 'нет -'} 
                        </div>
                    ))}
                </div>
                <div style={oneLineContainerStyle}>
                    {this.props.directions.map((direction, key) => (
                        <div key={key} style={itemStyle}> 
                            {this.props.timeTable[direction.abbr_key] 
                            && this.props.timeTable[direction.abbr_key]['+']
                            && this.props.timeTable[direction.abbr_key]['+'][0].name || 'нет +'} 
                        </div>
                    ))}
                </div>
            </div>
*/

DayLine.propTypes = {
    directions: PropTypes.array,
    timeTable: PropTypes.object,
    time: PropTypes.string
}

export default DayLine
