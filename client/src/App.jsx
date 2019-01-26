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
            flickerLights: false
        };
    }

    toggleSwitch = () => {

        this.setState({flickerLights: true});

        setTimeout(() => {
            this.setState({isButtonOn: true});
        }, 1000)
    }

    render() {
        return (
            <div className="app">
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
                                                <Route path="/" component={Home} exact/>
                                                <Route path="/meetme" component={MeetMe} exact/>Meet Me
                                                <Route exac path="/portfoliopage" component={PortfolioPage}/>Portfolio
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
                            <h1
                                style={{
                                color: 'white',
                                textAlign: 'center',
                                paddingTop: '250px'
                            }}>SWITCH ME ON.</h1>
                            <div className="switch" onClick={this.toggleSwitch}>
                                <input type="checkbox" name=""/>
                                <label></label>
                            </div>
                        </div>}

                </StrictMode>
            </div>
        );
    }
}
export default App;