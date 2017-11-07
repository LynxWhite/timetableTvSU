import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom'
import {Redirect} from 'react-router-dom'

class CourceMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: localStorage.cource || ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.faculty !== nextProps.match.params.faculty) {
            this.setState({value: ''})
        }
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    componentDidMount() {
        // $('select').material_select()
        // $(findDOMNode(this.refs.selectCource)).on('change', this.handleChange)
    }
    
    render() {
        let redirect = ''
        const thisCources = this.props.cources[this.props.match.params.faculty]
        if (this.state.value.length && this.state.value !== localStorage.cource) {
            localStorage.cource = this.state.value
            redirect = <Redirect to={'/' + localStorage.faculty + '/' + localStorage.cource} push={true} />
        }
        return (
            <div className='input-field'>
                <select value={this.state.value} ref='selectCource' onChange={this.handleChange}>
                    <option value='' disabled>Выберите направление</option>
                    {thisCources.map((cource, key)=>(
                        <option key={key} value={cource.id}>{cource.number}</option>
                    ))}
                </select>
                {redirect}
            </div>
        )
    }
}

export default connect(
    state => ({
        cources: state.cources
    })
)(CourceMenu)
