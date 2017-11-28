import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DayDirectionLine extends Component {
    render() {
        // console.log('data', this.props.data)
        const {data: subjects, week, colSpan} = this.props
        // console.log('colspan', colSpan, colSpan['-'] === colSpan['+'])
        if (colSpan[week] === 0) {
            return null
        }
        if (subjects === undefined) {
            if (week === '-') {
                return (
                    <div 
                        style={{
                            width: '100%', 
                            backgroundColor: 'red',
                            gridColumn: this.props.index + 1,
                            gridRow: '1 / 3'
                        }}> 
                        Пусто 
                    </div>
                )
            } return null
        }
        if (subjects['-']
            && subjects['+']
            && subjects['-'].name == subjects['+'].name && colSpan['-'] === colSpan['+']) {
            if (week === '-') {
                return (
                    <div rowSpan='2' colSpan={colSpan['-']} 
                        style={{
                            width: '100%', 
                            backgroundColor: '#d0f0c0',
                            gridColumn: this.props.index + 1 + ' / ' + (this.props.index + colSpan['-'] + 1),
                            gridRow: '1 / 3'
                        }}> 
                        {subjects['-'].name} 
                    </div>
                )
            } return null
        }
        
        if (!subjects[week]) {
            return (
                <div 
                    style={{
                        width: '100%', 
                        backgroundColor: '#ffcf48',
                        gridRow: week === '+' ? '2 / 3' : '1 / 2',
                        gridColumn: this.props.index + 1 + ' / ' + (this.props.index + colSpan[week] + 1)
                    }}
                >
                    Нет предмета 
                </div>
            )
        }
        // console.log('странный случай', subjects['-'].name, subjects['+'].name, week)
        return (
            <div 
                style={{
                    width: '100%', 
                    backgroundColor: '#48d1cc',
                    gridRow: week === '+' ? '2 / 3' : '1 / 2',
                    gridColumn: this.props.index + 1 + ' / ' + (this.props.index + colSpan[week] + 1)
                }}
            > 
                {subjects[week].name + week} 
            </div>
        )
    }
}

/*
render() {
        // console.log('data', this.props.data)
        const {data: subjects, week, colSpan} = this.props
        // console.log('colspan', colSpan, colSpan['-'] === colSpan['+'])
        if (colSpan[week] === 0) {
            return null
        }
        if (subjects === undefined) {
            if (week === '-') {
                return (
                    <td rowSpan='2' style={{width: '20%', backgroundColor: 'red'}}> Пусто </td>
                )
            } return null
        }
        if (subjects['-']
            && subjects['+']
            && subjects['-'].name == subjects['+'].name && colSpan['-'] === colSpan['+']) {
            if (week === '-') {
                return (
                    <td rowSpan='2' colSpan={colSpan['-']} style={{width: '20%', backgroundColor: '#d0f0c0'}}> {subjects['-'].name} </td>
                )
            } return null
        }
        if (!subjects[week]) {
            return (
                <td style={{width: '20%', backgroundColor: '#ffcf48'}}> Нет предмета </td>
            )
        }
        // console.log('странный случай', subjects['-'].name, subjects['+'].name, week)
        return (
            <td style={{width: '20%', backgroundColor: '#48d1cc'}} colSpan={colSpan[week]} > {subjects[week].name + week} </td>
        )
    }
*/

DayDirectionLine.propTypes = {
    data: PropTypes.object,
    week: PropTypes.string,
    colSpan: PropTypes.object,
    index: PropTypes.number
}

export default DayDirectionLine
