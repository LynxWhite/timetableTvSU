import React, {Component} from 'react'
import PropTypes from 'prop-types'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
}

const oneLineContainerStyle = {
    flexDirection: 'row',
    backgroundColor: 'orange',
    display: 'flex'
}

const itemStyle = {
    flex: '1'
}

class DayLine extends Component {
    render() {
        console.log('directions: ', this.props.directions)
        console.log('items: ', this.props.timeTable)
        console.log(this.props.timeTable[this.props.directions[0].abbr_key]['-'])
        const minusLine = []
        const plusLine  = []
        const bothLine  = []
        this.props.directions.map((direction, key) => {
            if (this.props.timeTable[direction.abbr_key]
                && this.props.timeTable[direction.abbr_key]['-']
                && this.props.timeTable[direction.abbr_key]['+']
                && this.props.timeTable[direction.abbr_key]['-'][0].name === this.props.timeTable[direction.abbr_key]['+'][0].name) {
                console.log('общая ячейка')
                bothLine.push(Object.assign({}, this.props.timeTable[direction.abbr_key]['-'], {verticalflex: 2}))
            } else {
                bothLine.push(null)
            }
        })
        console.log('объединение: ', bothLine)
        return (
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
        )
    }
}

DayLine.propTypes = {
    directions: PropTypes.array,
    timeTable: PropTypes.object
}

export default DayLine
