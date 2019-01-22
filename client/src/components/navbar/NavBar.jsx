import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
  render() { 

    return ( 
      <div className="navbar">
        <div className="logo"><NavLink exact={true} activeClassName='is-active' to="/">d_ash</NavLink></div>
        <ul className="navList">
          <li className="singleLink"><NavLink activeClassName='is-active' to="/meetme">Meet Me</NavLink></li>
          <li className="singleLink"><NavLink activeClassName='is-active' to="/portfoliopage">Portfolio</NavLink></li>
          <li className="singleLink"><NavLink activeClassName='is-active' to="/contact">Contact</NavLink></li>
        </ul>
      </div>
     );
  }
}
 
export default NavBar;