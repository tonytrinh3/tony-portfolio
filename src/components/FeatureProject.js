import React from 'react';
import {Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {connect} from 'react-redux'

import {renderToolsUsed} from './toolsUsed';


import airbnbImg1 from "../img/mock-airbnb-11.PNG";
import airbnbImg2 from "../img/mock-airbnb-front-2.PNG";
import airbnbImg3 from "../img/mock-airbnb-22.PNG";
import airbnbImg4 from "../img/mock-airbnb-33.PNG";
import airbnbImg5 from "../img/mock-airbnb-4.PNG";

import rightArrow from 'img/right-arrow.svg';



class FeatureProject extends React.Component{

    render(){
        const airbnbImg = [airbnbImg1,airbnbImg2,airbnbImg3,airbnbImg4,airbnbImg5];


        const airbnbProject = this.props.projects[0];


        return (
            <div id = "feature-project" className="feature-project u-section-first-padding u-margin-bottom-small">
               <h2 className="feature-project__header heading-huge u-margin-bottom-small ">Feature Project</h2>
               <Carousel autoPlay className="feature-project__carousel">
                    {airbnbImg.map((img,i)=>{
                        return (
                            <div key = {i}>
                                <img alt={`airbnb img ${i}`} src={img}  />
                            </div>
                        )
                    })}
               </Carousel>
               {/* <img src={require("../img/mock-airbnb-1.PNG")} alt="" className = "feature-project__img u-margin-bottom-small"/>
               <img src={require('../img/mock-airbnb-front-page.PNG')} alt="" className = "feature-project__img u-margin-bottom-small"/> */}
               <h2 className="heading-med ">mock-airbnb</h2>
                {renderToolsUsed(airbnbProject.languages)}
                {/* <p className = "">I created a mock Airbnb project to demonstrate my front-end development knowledge.</p> */}
                <h3 className=" heading-small ">Design Features: </h3>
                <ul className="feature-project__features" >
                   <li className="feature-project__features__item feature-project__features__item--main">Login using your Google account</li>
                   <li className="feature-project__features__item feature-project__features__item--sub">Your name and picture shown on the nav bar.</li>
                   <li className="feature-project__features__item feature-project__features__item--main">Browse and view different listings.</li>
                   <li className="feature-project__features__item feature-project__features__item--sub">Listings are read (via CRUD operations) from a server.</li>
                   <li className="feature-project__features__item feature-project__features__item--main">Reserve a room based on dates and guest.</li>
                   <li className="feature-project__features__item feature-project__features__item--sub">Reservations are connected to your name, and created on the server.</li>
                   <li className="feature-project__features__item feature-project__features__item--main">View your reservation on "Your Trips" page.</li>
                   <li className="feature-project__features__item feature-project__features__item--sub">Reservations are rendered based on Google ID.</li>
               </ul>
              <ul>
                  <li><a className = "feature-project__links" href = {airbnbProject.liveLink}>Live Demo</a></li>
                  <li><a className = "feature-project__links" href = {airbnbProject.sourceLink}>Source Code</a></li>
                  <li><Link className = "feature-project__links feature-project__links--arrow"  to={`/projects/mock-airbnb`}>Read More About It</Link></li>
                {/* <img className = "feature-project__links--arrow" src = {rightArrow} alt = "right-arrow"/> */}
              </ul>
              
               
               
            </div>
        )

    }
   
};



const mapStateToProps =(state)=>{
    console.log(state);
    return{
        projects: Object.values(state.projects)
    }
}

export default connect(mapStateToProps,null)(FeatureProject);
