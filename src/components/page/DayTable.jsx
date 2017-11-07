import React, {Component} from 'react'

class DayTable extends Component {
    render() {
        return (
            <table className='table is-bordered is-hoverable is-fullwidth'>
                <thead>
                    <tr>
                        <td>ПМК</td>
                        <td>ПМК</td>
                        <td>ПМК</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                        8:30 - 10:05
                        </th>
                        <td>один</td>
                        <td>Два</td>
                        <td>Три</td>
                    </tr>
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

export default DayTable
