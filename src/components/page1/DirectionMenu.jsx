import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom'
import {Redirect} from 'react-router-dom'
class DirectionMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: localStorage.direction || ''
        }
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    componentDidMount() {
        $(findDOMNode(this.refs.selectDirection)).on('change', this.handleChange)
    }
    
    render() {
        let redirect = ''
        if (this.state.value.length && this.state.value !== localStorage.direction) {
            localStorage.faculty = this.state.value
            redirect = <Redirect to={'/' + localStorage.faculty + '/' + localStorage.direction} push={true} />
        }
        return (
            <div className='input-field'>
                <select value={this.state.value} ref='selectDirection'>
                    <option value='' disabled>Выберите направление</option>
                    {this.props.faculties.map((faculty, key)=>(
                        <option key={key} value={faculty.id}>{faculty.name}</option>
                    ))}
                </select>
                {redirect}
            </div>
        )
    }
}

export default connect(
    state => ({
        faculties: state.faculties
    })
)(DirectionMenu)
