import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
  render() { 

    return ( 
      <div className="navbar">
        <div className="logo"><NavLink to="/">LOGO</NavLink></div>
        <ul className="navList">
          <li className="singleLink"><NavLink to ="/meetme">Meet Me</NavLink></li>
          <li className="singleLink"><NavLink to ="/portfoliopage">Portfolio</NavLink></li>
          <li className="singleLink"><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
      </div>
     );
  }
}
 
export default NavBar;