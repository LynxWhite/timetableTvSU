import React, {Component} from 'react'
import PageHeader from './PageHeader'
import DayTable from './DayTable'

class PageWrapper extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <h3> Понедельник </h3>
                <DayTable/>
            </div>
        )
    }
}

export default PageWrapper
