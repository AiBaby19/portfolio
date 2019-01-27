import React, {Component, StrictMode} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PortfolioPage from './components/portfoliopage/PortfolioPage';
import MeetMe from './components/meetme/MeetMe';
import Contact from './components/contactme/Contact';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isButtonOn: false,
            flickerLights: false,
            // afterSwitch: false
        };
    }

    toggleSwitch = () => {

        this.setState({flickerLights: true});

        setTimeout(() => {
            this.setState({isButtonOn: true});
        }, 1000)
    }

    render() {
        const thisProps = this.state.after;

        return (
                <StrictMode>
                    {this.state.isButtonOn
                        ? (
                            <div>
                                <BrowserRouter>
                                    <div>

                                        <div className="fade-in">
                                            <div>
                                                <NavBar/>
                                            </div>

                                            <Switch>
                                                <Route path="/" render={() => <Home {...thisProps}/>} exact/>
                                                <Route path="/meetme" component={MeetMe} exact/>Meet Me
                                                <Route path="/portfoliopage" component={PortfolioPage} exact/>Portfolio
                                                <Route path="/contact" component={Contact} exact/>Contact
                                            </Switch>
                                        </div>
                                    </div>
                                </BrowserRouter>
                            </div>
                        )
                        : <div
                            style={{
                            backgroundColor: "black",
                            height: '100vh',
                            padding: '0',
                            margin: '0'
                        }}
                            className={this.state.flickerLights
                            ? "flicker-out-1"
                            : null}>
                            <div className="container">
                            {/* <div> */}
                                
                                    <h1 className="switchMeHeadline"
                                    >SWITCH ME</h1>
                                    <div className="switchHolder">
                                        <div className="switch" onClick={this.toggleSwitch}>
                                            <input type="checkbox" name=""/>
                                            <label></label>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>}

                </StrictMode>
        );
    }
}
export default App;