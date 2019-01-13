import React, { Component } from 'react';
import './portfolioPage.css';


const projects = [
  {title: 'Portfolio', titleImg: '/img/portfolio3.jpg', titleImgAlt: 'portfolio', link: 'https://www.drordvash.com', bigImg:'/img/meetme.jpg', bigImgAlt: 'meetmePortfolio', type: 'website', details:'Technologies: HTML/CSS, React & Mobx, NodeJs, NodeMailer'},
  
  {title: 'WheresMyFood', titleImg: '/img/whereismyfood.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'/img/wheremyfoodat.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Delivery App including 3 sides (client, delivery employee, restaurant) that monitors the progress of food prapration and delivery time and progress via google maps. Technologies: jQuery, GoogleMaps, NodeJs, '},

  {title: 'WheresMyFood', titleImg: '/img/wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'/img/triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},

  {title: 'WheresMyFood', titleImg: '/img/wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'/img/triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
]


class PortfolioPage extends Component {
  state = {
    cardopen: false
  }


  render() { 
    return ( 
      <div>
        <h1 className="project-headline">Recent Work</h1>
        <div className="container">
          <div className="wrapper">
            <ul className="stage">
              {projects.map((project,index) => {
                return (
                  <li key={index} className="scene" style={{border: 'solid 1px lightgrey'}}>
                  <div className="movie">
                    <div className="poster"><img src={project.titleImg} alt={project.titleImgAlt} width="260" height="400"/></div>
                    <div onClick={()=>window.open(project.link)} className="info">

                      <header><img src={project.bigImg} alt={project.bigImgAlt} width="240" height="195"/>
                        {/* <h1>{project.title}</h1> */}
                        {/* <span className="year">1946</span>
                        <span className="rating">PG</span>
                        <span className="duration">130 minutes</span> */}
                      </header>
                      <p>
                        {project.details}
                      </p>
                    </div>
                  </div>
                </li>
              )})}
            </ul>
          </div>
        </div> 
      </div>
     );
  }
}
 
export default PortfolioPage;