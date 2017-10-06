import React, {Component} from 'react'
import FacultyMenu from './FacultyMenu'
import DirectionMenu from './DirectionMenu'
import { Route, Switch } from 'react-router-dom'
class PageWrapper extends Component {
    render() {
        return (
            <div>
                <FacultyMenu/>
                <Switch>
                    <Route path='/:faculty' component={DirectionMenu}/>
                </Switch>
            </div>
        )
    }
}

export default PageWrapper
