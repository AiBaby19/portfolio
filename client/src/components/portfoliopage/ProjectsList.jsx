import React, {Component} from 'react';
import './portfolioPage.css';

const projects = [
    {
        title: 'Portfolio',
        titleImg: '/img/portfolio3.jpg',
        titleImgAlt: 'portfolio',
        link: 'https://www.drordvash.com',
        bigImg: '/img/meetme.jpg',
        bigImgAlt: 'meetmePortfolio',
        type: 'website',
        details: 'Technologies: HTML/CSS, React & Mobx, NodeJs, NodeMailer'
    }, {
        title: 'WheresMyFood',
        titleImg: '/img/whereismyfood.jpg',
        titleImgAlt: 'wmf',
        link: 'https://whereismyfood.herokuapp.com/',
        bigImg: '/img/BARMAZI-min.png',
        bigImgAlt: 'wmfBig',
        type: 'webapp',
        details: 'Delivery App including 3 sides (client, delivery employee, restaurant) that moni' +
                'tors the progress of food preparation and delivery time and progress via google m' +
                'aps. Technologies: jQuery, GoogleMaps, NodeJs, '
    }, {
        title: 'eMaily',
        titleImg: '/img/emailypic.jpg',
        titleImgAlt: 'emaily',
        link: 'https://ancient-journey-22712.herokuapp.com/',
        bigImg: '/img/eMaily.png',
        bigImgAlt: 'eMailyBig',
        type: 'webapp',
        details: 'Sending emails to clients and getting all the responds in an order manner. The u' +
                'ser can get credit by paying with an integrated payment system (Stripe) Technologies: Node.js, MongoDB, React, Redux, GoogleAuth, SendGrid, Stripe'
    }
]

class PortfolioList extends Component {

    render() {
        return (
            <div>
                <ul className="stage">
                    {projects.map((project, index) => {
                        return (
                            <li
                                key={index}
                                className="scene"
                                style={{
                                border: 'solid 1px lightgrey'
                            }}>
                                <div className="movie">
                                    <div className="poster"><img src={project.titleImg} alt={project.titleImgAlt} width="260" height="400"/></div>
                                    <div onClick={() => window.open(project.link)} className="info">
                                        <div>
                                        <img className="innerImg"
                                            src={project.bigImg}
                                            alt={project.bigImgAlt}
                                            /> 
                                            </div>
                                        <p>
                                            {project.details}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default PortfolioList;
