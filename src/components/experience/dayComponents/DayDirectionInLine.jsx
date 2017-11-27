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
                    <td rowSpan='2' style={{width: '20%', backgroundColor: 'red'}}> Пусто </td>
                )
            } return null
        }
        if (subjects['-']
            && subjects['+']
            && subjects['-'].name == subjects['+'].name && colSpan['-'] === colSpan['+']) {
            if (week === '-') {
                console.log('same subjects', subjects['-'].name, subjects['+'].name)
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
}

DayDirectionLine.propTypes = {
    data: PropTypes.object,
    week: PropTypes.string,
    colSpan: PropTypes.object
}

export default DayDirectionLine
