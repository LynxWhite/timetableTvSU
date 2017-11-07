import React, {Component} from 'react'
// import Logo from 'file-loader!../../resources/icons/tvsu-logo.gif'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar-material'>
                <div className='nav-wrapper blue darken-4'>
                    <a href='/' className='brand-logo'>ТвГУ</a>
                    <a href='#' data-activates='mobile-demo' className='button-collapse'><i className='material-icons'>menu</i></a>
                    
                </div>
            </nav>
        )
    }
}

/*
<ul className='right hide-on-med-and-down'>
                        <li><a href='sass.html'>Sass</a></li>
                        <li><a href='badges.html'>Components</a></li>
                        <li><a href='collapsible.html'>Javascript</a></li>
                        <li><a href='mobile.html'>Mobile</a></li>
                    </ul>
                    <ul className='side-nav' id='mobile-demo'>
                        <li><a href='sass.html'>Sass</a></li>
                        <li><a href='badges.html'>Components</a></li>
                        <li><a href='collapsible.html'>Javascript</a></li>
                        <li><a href='mobile.html'>Mobile</a></li>
                    </ul>
*/

export default Navbar
