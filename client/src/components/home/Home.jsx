import React from 'react';
import {Link} from 'react-router-dom';

import './home.css';

export default() => {
  return (
        <div className="app">
            <h1 className="home-headline">Full Stack Developer</h1>
            <div className="main-img">
                <img
                    src="/img/porfolioimg.png"
                    alt="themepic"
                    height="200"
                    width="500"
                    className="flicker-in-2"/>
            </div>
            <Link to="/contact">
                <button className="bounce-in-top home-button">CONTACT</button>
            </Link>
        </div>
    );
}
