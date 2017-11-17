import React, {Component} from 'react'

import HeaderComponent from './HeaderComponent'

import {faculties, courcesTypes, courceList, directions, timeList} from './facultyData'

import ContentComponent from './ContentComponent'

class PageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFaculty: 'PMK',
            selectedCourseType: 'bachelorDegree',
            selectedCource: 1
        }
    }

    selectFaculty = (e) => {
        console.log('selected: ', e.target.value)
        this.setState({selectedFaculty: e.target.value})
    }

    selectCourceType = (e) => {
        console.log('selected cource type: ', e.target.value)
        this.setState({selectedCourseType: e.target.value})
    }

    selectCource = (e) => {
        console.log('selected cource: ', e.target.value)
        this.setState({selectedCource: parseInt(e.target.value)})
    }

    render() {
        const choosedCourcesList = courceList[this.state.selectedFaculty]
        const currentDirections = directions[this.state.selectedFaculty][this.state.selectedCourseType][this.state.selectedCource]
        return (
            <div>
                <HeaderComponent 
                    faculties={faculties} 
                    selected={this.state.selectedFaculty} 
                    selectFaculty={this.selectFaculty} 

                    courcesTypes={courcesTypes}
                    selecedType={this.state.selectedCourseType}
                    selectCourceType={this.selectCourceType}

                    selectedCource={this.state.selectedCource}
                    choosedCourcesList={choosedCourcesList}
                    selectCource={this.selectCource}
                />
                <h3> Список направлений данного факультета: </h3>
                <ul>
                    {currentDirections.map((direction, key) => (
                        <li key={key}> {direction.name} </li>
                    ))}
                </ul>
                <ContentComponent
                />
            </div>
        )
    }
}

export default PageComponent
