import React, {Component} from 'react';
import Modal from '../modal/Modal';
// import {observer, inject} from 'mobx-react';
import './meetme.css';

const showSkillsList = {
    height: '360px',
    backgroundColor: 'white',
    width: '25%',
    border: 'solid 0.2px #9055fb',
    boxShadow: '0px 3px 12px 0px rgba(155, 155, 163, 1)',
    zIndex: '0'
}

const rotate = {
    // -ms-filter: "FlipH"; -moz-transform: scaleX(-1); -o-transform: scaleX(-1);
    // -webkit-transform: scaleX(-1);
    transform: 'scaleX(-1)',
    filter: 'FlipH'
}

const numberIcons = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
    marginTop: '15px',
    width: 'auto',
    maxWidth: '90%',
    textAlign: 'left',
    alignItems: 'center'
}


const certifications = [
    {title: 'Responsive Web Design', institute: 'FreeCodeCamp', link: "https://www.freecodecamp.org/certification/dubask/responsive-web-design",
    smallImg: '/img/responsiveWebDeSmall.jpg', smallImgAlt: "responsiveWebDeSmall", bigImg: '/img/responsiveWebDesign.png', bigImgAlt: 'responsiveWebDeBig',details: 'From applied visual design to flexbox. 300 hours of responsivness and flexebility. '},

    {title: 'Structure & Readability', institute: 'Benjamin Melki', link: 'https://www.udemy.com/certificate/UC-Z6CAIZQG/', smallImg: "/img/jswp.jpg", smallImgAlt: "readabilitysmall", bigImg: '/img/readability.jpg', bigImgAlt: 'readabilityBig', details: 'Apply a systematic approach to properly start any mobile, web or desktop software project: organize the flow of any program. organize projects folders structure. files names. code high quality, readable and maintainable code properly name variables and write good code comments simplify their conditional structures. create effective functions and classes.'},

    {title: 'JS - The Weird Parts', institute: 'Anthony Alecia', link: 'https://www.udemy.com/certificate/UC-GTBY8TWK/', smallImg: "/img/jswp.jpg", smallImgAlt: "javaScript the weird parts", bigImg: '/img/JavaScripttheWeirdParts.jpg', bigImgAlt: 'JS Weird Parts', details: 'Gaining a deep understanding of Javascript, learn how Javascript works under the hood. objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs), call, apply, bind, and more.'},

    {title: 'Code Wars (Algorithm)', smallImg: '/img/codewarssmall.png', smallImgAlt: 'codewarsSmall', 
    details: 'Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata. The more kata the programmer complete the higher his rank goes.',bigImg:'https://www.codewars.com/users/Dash_9/badges/large', bigImgAlt: 'codwarsBig'}
  ]


// @inject(allStores => ({certifications: allStores.store.certifications}))

// @observer
class MeetMe extends Component {
    state = {
        isModal: false,
        certificationIndex: null
    }

    toggleModal = (index) => {
        this.setState({
            isModal: !this.state.isModal,
            certificationIndex: index
        });
    }

    render() {
        return (
            <div>
                <div
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <h3
                        style={{
                        textAlign: 'center',
                        marginTop: '-20px',
                        textShadow: '0px 3px 12px 0px rgba(155, 155, 163, 1)'
                    }}>Hi, my name is Dror.</h3>
                    <br/>
                    <div
                        className="colorRow"
                        style={{
                        backgroundColor: '#F4F8F9',
                        height: '200px',
                        zIndex: '-10',
                        textAlign: 'center',
                        opacity: '.2'
                    }}></div>

                    <p
                        className="introduction"
                        style={{
                        margin: '0 auto',
                        marginTop: '-180px',
                        color: '#9aa0a5',
                        width: '50%',
                        textAlign: 'center',
                        fontSize: '15px',
                        fontWeight: '300'
                    }}>
                        Nice to meet you! :) Im a Full Stack Web Developer with an obssesion to build
                        successful digital assets online.</p>

                    <div
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '90%',
                        margin: '0 auto',
                        marginTop: '60px'
                    }}>

                        <div className="frontSkills" style={showSkillsList}>
                            {/* <button type="button" style={{display: 'flex', marginTop: '8px', border: 'none', color: '#FFAA19', fontSize: '24px'}}>+</button> */}
                            <h3
                                style={{
                                textAlign: 'center',
                                paddingTop: '30px',
                                marginBottom: '30px'
                            }}>Full Stack</h3>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/html5.svg" height="50px" width="40px" alt="html5"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>HTML & CSS</p>
                                <div>95%</div>
                            </div>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/javascript.svg" height="50px" width="40px" alt="javascript"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>JS / ES6&7</p>
                                <div>90%</div>
                            </div>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/react.svg" height="50px" width="40px" alt="react"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>REACT</p>
                                <div>85%</div>
                            </div>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/nodejs.svg" height="50px" width="40px" alt="nodejs"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>NODEJS</p>
                                <div>82%</div>
                            </div>

                        </div>

                        <div className="essentials" style={showSkillsList}>
                            <h3
                                style={{
                                textAlign: 'center',
                                paddingTop: '30px',
                                marginBottom: '30px'
                            }}>Essential Skills</h3>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/ux.svg" height="50px" width="40px" alt="ux/ui"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>UX/UI</p>
                                <div>93%</div>
                            </div>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/selflearner.svg" height="50px" width="40px" alt="selflearner"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>AUTODIDACT</p>
                                <div>97%</div>
                            </div>

                            <div style={numberIcons}>
                                <div>
                                    <img src="/img/teamplayer.svg" height="50px" width="40px" alt="teamplayer"/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>TEAM PLAYER</p>
                                <div>99%</div>
                            </div>

                            <div style={numberIcons}>
                                <div>
                                    <img
                                        src="/img/think.svg"
                                        height="50px"
                                        width="40px"
                                        alt="think"
                                        style={rotate}/>
                                </div>
                                <p
                                    style={{
                                    fontSize: '14px'
                                }}>PROBLEM SOLVING</p>
                                <div>91%</div>
                            </div>
                        </div>

                        <div className="certifications" style={showSkillsList}>
                            <h3
                                style={{
                                textAlign: 'center',
                                paddingTop: '30px',
                                marginBottom: '30px'
                            }}>On My Free Time</h3>

                            {certifications.map((certification, index) => (
                                    <div key={index} style={numberIcons} onClick={() => this.toggleModal(index)}>
                                        <div>
                                            <img
                                                src={certification.smallImg}
                                                height="45px"
                                                width="65px"
                                                alt={certification.smallImgAlt}/>
                                        </div>
                                        <p
                                            style={{
                                            fontSize: '14px',
                                            margin: '0 auto'
                                        }}
                                            className="certificationName">{certification.title}</p>
                                    </div>
                                ))}
                            {/* <button type="button" style={{display: 'flex', margin: '0 auto', marginTop: '16px', border: 'none', color: '#FFAA19', fontSize: '14px'}}>Watch All</button> */}
                        </div>
                    </div>
                    {this.state.isModal
                        ? <Modal
                                closeModal={this.toggleModal}
                                certificationIndex={this.state.certificationIndex}
                                certifications={certifications}/>
                        : null}
                </div>
            </div>
        );
    }
}

export default MeetMe;