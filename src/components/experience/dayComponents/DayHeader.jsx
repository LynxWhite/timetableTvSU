import React, {Component} from 'react'
import PropTypes from 'prop-types'

const columnStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'yellow'
}

const itemStyle = {
    flex: 1
}

class DayHeader extends Component {
    render() {
        return (
            <div style={columnStyle}>
                <div style={itemStyle}/>
                {this.props.directions.map((direction, dkey) => (
                    <div key={dkey} style={itemStyle}>
                        {direction.abbr}
                    </div>
                ))}
            </div>
        )
    }
}

DayHeader.propTypes = {
    directions: PropTypes.array
}

export default DayHeader
