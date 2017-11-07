import React, {Component} from 'react'

class DayTitle extends Component {
    render() {
        return (
            <nav className='valign-wrapper z-depth-0 day-title--wrapper blue darken-2'>
                <p className='center-align day-title'> {this.props.day} </p>
            </nav>
        )
    }
}

export default DayTitle
