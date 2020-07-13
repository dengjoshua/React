import React, { Component } from 'react'


class NavBar extends Component {
    render() { 
            return ( 
            <nav className="navbar navbar-light  bg-light ">
           <a className="navbar-brand" href="latest movies.com">
            Navbar<span className="badge badge-secondary m-2">{ this.props.totalCounters }</span>
           </a>         
            </nav>
         );
    }
}
 
export default NavBar;