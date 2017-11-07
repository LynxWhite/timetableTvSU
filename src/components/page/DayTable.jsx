import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DayTable extends Component {
    render() {
        const directions = this.props.directions || []
        const facultyTime = this.props.time || []
        console.log(facultyTime)
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
                            <td>один</td>
                            <td>Два</td>
                            <td>Три</td>
                            <td>Четыре</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>ПМК</td>
                        <td>ПМК</td>
                        <td>ПМК</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

DayTable.propTypes = {
    directions: PropTypes.array,
    time: PropTypes.array
}

export default DayTable
