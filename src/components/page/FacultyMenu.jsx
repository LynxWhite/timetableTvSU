import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom'
import {Redirect} from 'react-router-dom'
class FacultyMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: localStorage.faculty || ''
        }
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    componentDidMount() {
        $('select').material_select()
        $(findDOMNode(this.refs.selectFaculty)).on('change', this.handleChange)
    }
    
    render() {
        let redirect = ''
        if (this.state.value.length && this.state.value !== localStorage.faculty) {
            localStorage.faculty = this.state.value
            redirect = <Redirect to={'/' + localStorage.faculty} push={true} />
        }
        return (
            <div className='input-field'>
                <select value={this.state.value} ref='selectFaculty'>
                    <option value='' disabled>Выберите факультет</option>
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
)(FacultyMenu)
