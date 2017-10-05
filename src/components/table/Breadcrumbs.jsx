import React, {Component} from 'react'

class Breadcrumbs extends Component {
    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <div className='col s12'>
                        <a href='#!' className='breadcrumb'>First</a>
                        <a href='#!' className='breadcrumb'>Second</a>
                        <a href='#!' className='breadcrumb'>Third</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Breadcrumbs
