import React, {Component} from 'react'
import PropTypes from 'prop-types'

class HeaderComponent extends Component {
    render() {
        const courceList = this.props.choosedCourcesList[this.props.selecedType]
        return (
            <header>
                <select value={this.props.selected} onChange={this.props.selectFaculty}>
                    {this.props.faculties.map((faculty, key) => (
                        <option
                            key={key}
                            value={faculty.abbr_key}
                        >
                            {faculty.name}
                        </option>
                    ))}
                </select>
                <select value={this.props.selecedType} onChange={this.props.selectCourceType}>
                    {this.props.courcesTypes.map((cource, key) => (
                        <option
                            key={key}
                            value={cource.key}
                        >
                            {cource.name}
                        </option>
                    ))}
                </select>
                <select value={this.props.selectedCource} onChange={this.props.selectCource}>
                    {courceList.map((cource, key) => (
                        <option
                            key={key}
                            value={cource}
                        >
                            {cource}
                        </option>
                    ))}
                </select>
            </header>
        )
    }
}

HeaderComponent.propTypes = {
    faculties: PropTypes.array,
    selectFaculty: PropTypes.func,
    selected: PropTypes.string,
    courcesTypes: PropTypes.array,
    selecedType: PropTypes.string,
    selectCourceType: PropTypes.func,
    selectedCource: PropTypes.number,
    selectCource: PropTypes.func,
    choosedCourcesList: PropTypes.object
}

export default HeaderComponent
