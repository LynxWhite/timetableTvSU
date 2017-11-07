import React, {Component} from 'react'
import DayTitle from './DayTitle'

const weekType = ['-', '+']

class TimeDay extends Component {
    UnionSubColumn = (array) => {
        if (array[0] === array[1]) {
            return [{
                data: array[0],
                colSize: 2
            }]
        }
        return array
    }

    renderLittleColumn = (array, key, type) => {
        let test = this.UnionSubColumn(array)
        if (test.length === 1) {
            test = test[0]
            return <td key={key} colSpan={test.colSize}>
                {
                    test.data !== '-' ?
                        test.data + type
                        : ' '
                }
            </td>
        }
        return (test.map((item, iKey)=>(
            <td key={key + iKey}>
                {
                    item !== '-' ?
                        item + type
                        : ' '
                }
            </td>
        )))
    }

    render() {
        return (
            <div>
                <DayTitle day={this.props.day} />
                <table>
                    <thead>
                        <tr>
                            <th className='time-column'>Время</th>
                            {this.props.directions.map((direction, key) => (
                                <th key={key} colSpan='2'>{direction.abbr + ' ' + this.props.cource[0] + direction.number}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((data, key)=>(
                            weekType.map((type, typeKey)=>(
                                <tr key={typeKey + key}>
                                    <td>
                                        {type === '-' ?  data.time : null}
                                    </td>
                                    {this.props.directions.map((direction, directionKey) => (
                                        this.renderLittleColumn(data.data[direction.abbr][type], directionKey, type)
                                    ))}
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TimeDay
