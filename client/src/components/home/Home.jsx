import React, {Component, StrictMode} from 'react';
import Loader from '../loader/Loader';

import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)

        return (
            <div className="app">
                <StrictMode>
                    <h1 className="home-headline">Full Stack Developer</h1>
                    {/* <h4 className="typewriter">Useful Products. Beatifuly Designed. Simple Code.</h4> */}
                    <div className="main-img">
                        <img
                            onLoad={() =>< Loader />}
                            src="/img/porfolioimg.png"
                            alt="themepic"
                            height="200"
                            width="500"
                            className= "flicker-in-2"/>
                    </div>
                    <button
                        className="bounce-in-top home-button" 
                        type="button"
                        onClick={() => this.props.history.push('/contact')}>CONTACT</button>
                </StrictMode>
            </div>
        );
    }
}

export default Home;
