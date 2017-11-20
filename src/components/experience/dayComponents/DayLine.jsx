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
    display: 'flex',
    flex: '1'
}

const itemStyle = {
    flex: '1'
}

class DayLine extends Component {
    render() {
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


        console.log('объединение: ', bothLine)
        return (
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
        )
    }
}

/*
items.subjects ? 
                            <div key={key} style={containerStyle}>
                                <div style={itemStyle}>
                                    Пусто
                                </div>
                                <div style={itemStyle}>
                                    Пусто
                                </div>
                            </div>
                            : <div style={itemStyle}>
                                Пусто
                            </div>
                        :
                        <div key={key} style={itemStyle}>
                            бла2
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
    timeTable: PropTypes.object
}

export default DayLine
