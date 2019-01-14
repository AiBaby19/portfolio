import React, {Component} from 'react';
import Modal from '../modal/Modal';
import './meetme.css';


//rotating the problem solving icon
const rotate = {
    transform: 'scaleX(-1)',
    filter: 'FlipH'
}


const certifications = [

    {title: 'JavaScript Algorithm & Data Structures', institute: 'FreeCodeCamp', link: "https://www.freecodecamp.org/certification/dubask/javascript-algorithms-and-data-structures",
    smallImg: '/img/jsalgoSmall.jpg', smallImgAlt: "fccJSCertification", bigImg: '/img/jsalgoBig.png', bigImgAlt: 'responsiveWebDeBig',details: 'Developing skills that fits the industry, learning about regular expressions, debugging, advnaced algorithm and data structures, fucntional programming and ES6'},


    {title: 'Responsive Web Design', institute: 'FreeCodeCamp', link: "https://www.freecodecamp.org/certification/dubask/responsive-web-design",
    smallImg: '/img/responsiveWebDeSmall.jpg', smallImgAlt: "responsiveWebDeSmall", bigImg: '/img/responsiveWebDesign.png', bigImgAlt: 'responsiveWebDeBig',details: 'From applied visual design to flexbox. 300 hours of responsivness and flexebility. '},

    {title: 'Structure & Readability', institute: 'Benjamin Melki', link: 'https://www.udemy.com/certificate/UC-Z6CAIZQG/', smallImg: "/img/jswp.jpg", smallImgAlt: "readabilitysmall", bigImg: '/img/readability.jpg', bigImgAlt: 'readabilityBig', details: 'Apply a systematic approach to properly start any mobile, web or desktop software project: organize the flow of any program. organize projects folders structure. files names. code high quality, readable and maintainable code properly name variables and write good code comments simplify their conditional structures. create effective functions and classes.'},

    {title: 'JS - The Weird Parts', institute: 'Anthony Alecia', link: 'https://www.udemy.com/certificate/UC-GTBY8TWK/', smallImg: "/img/jswp.jpg", smallImgAlt: "javaScript the weird parts", bigImg: '/img/JavaScripttheWeirdParts.jpg', bigImgAlt: 'JS Weird Parts', details: 'Gaining a deep understanding of Javascript, learn how Javascript works under the hood. objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs), call, apply, bind, and more.'},

    // {title: 'Code Wars (Algorithm)', smallImg: '/img/codewarssmall.png', smallImgAlt: 'codewarsSmall', 
    // details: 'Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata. The more kata the programmer complete the higher his rank goes.',bigImg:'https://www.codewars.com/users/Dash_9/badges/large', bigImgAlt: 'codwarsBig'}
  ]

const techSkills = [
    {
        skill: 'HTML & CSS',
        img: '/img/html5.svg',
        perc: '95%'
    },
    {
        skill: 'JS & ES6',
        img: '/img/javascript.svg',
        perc: '95%'
    },
    {
        skill: 'REACT',
        img: '/img/react.svg',
        perc: '95%'
    },
    {
        skill: 'NODEJS',
        img: '/img/nodejs.svg',
        perc: '95%'
    }
]

const softSkills = [
    {
        skill: 'UX/UI',
        img: '/img/ux.svg',
        perc: '95%'
    },
    {
        skill: 'AUTODIDACT',
        img: '/img/selflearner.svg',
        perc: '95%'
    },
    {
        skill: 'TEAM PLAYER',
        img: '/img/teamplayer.svg',
        perc: '95%'
    },
    {
        skill: 'PROBLEM SOLVING',
        img: '/img/think.svg',
        perc: '95%',
        style: rotate
    }
]


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
            
                <div className="wrapper">
                    <h3 className="headline-name">
                        Hi, my name is Dror.</h3>
                    <br/>
                    <div className="transparent-space"></div>
                    <p className="introduction">
                        Nice to meet you! :) Im a Full Stack Web Developer with an obssesion to build
                        successful digital assets online.</p>

                    <div className="all-skills-wrapper">
                        <div className="frontSkills show-skills-list">
                            <h3 className="skillbox-headline">
                                Full Stack
                            </h3>

                            {techSkills.map(({ skill, img, perc }) => {
                                return (
                                    <div className="number-icons">
                                        <div>
                                            <img src={img} height="50px" width="40px" alt={skill}/>
                                        </div>
                                        <p style={{fontSize: '14px'}}>{skill}</p>
                                        <div>{perc}</div>
                                    </div>)
                            })}
                        </div>

                        <div className="essentials show-skills-list">
                            <h3 className="skillbox-headline">
                                Essential Skills</h3>

                            {softSkills.map(({ skill, img, perc, style }) => {
                                return (
                                    <div className="number-icons">
                                        <div>
                                            <img src={img} height="50px" width="40px" alt={skill}
                                            style={{style} = "PROBLEM SOLVING" ? rotate : null}/>
                                        </div>
                                        <p style={{fontSize: '14px'}}>{skill}</p>
                                        <div>{perc}</div>
                                    </div>)
                            })}
                        </div>

                        <div className="certifications show-skills-list">
                            <h3 className="skillbox-headline">
                                On My Free Time</h3>

                            {certifications.map((certification, index) => (
                                    <div key={index} className="number-icons" onClick={() => this.toggleModal(index)}>
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
                                            className="certification-name">{certification.title}</p>
                                    </div>
                                ))}

                        </div>
                    </div>
                    {this.state.isModal
                        ? <Modal
                                closeModal={this.toggleModal}
                                certificationIndex={this.state.certificationIndex}
                                certifications={certifications}/>
                        : null}
                </div>
          
        );
    }
}

export default MeetMe;