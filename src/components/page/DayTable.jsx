import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DayTable extends Component {
    render() {
        const directions = this.props.directions || []
        const facultyTime = this.props.time || []
        const subgroups = [1, 2]
        const someSubjects = {}
        if (directions.length) {
            const someItem = {1: 'Дискретная математика'}
            someSubjects['8:30-10:05'] = {}
            someSubjects['8:30-10:05'][directions[0].name] = someItem
        }
        console.log(someSubjects)
        return (
            <table className='table is-bordered is-hoverable is-fullwidth'>
                <thead>
                    <tr>
                        <td>Время</td>
                        {directions.map((direction, key)=>(
                            <td key={key} colSpan='2'> {direction.name} </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {facultyTime.map((time, key) => (
                        <tr key={key}>
                            <th>
                                {time.time}
                            </th>
                            {
                                directions.map((direction, dirKey)=>(
                                    subgroups.map((item, ikey) =>(
                                        <td key={dirKey + '_' + ikey}>
                                            {someSubjects[time.time] ? someSubjects[time.time][direction.name][item] :  'Пусто'}
                                        </td>
                                    )) 
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

/*
                <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot>
*/

DayTable.propTypes = {
    directions: PropTypes.array,
    time: PropTypes.array
}

export default DayTable
