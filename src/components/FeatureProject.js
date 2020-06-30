import React from 'react';
import {Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {renderToolsUsed} from './toolsUsed';
import airbnbImg1 from "../img/mock-airbnb-11.PNG";
import airbnbImg2 from "../img/mock-airbnb-front-2.PNG";
import airbnbImg3 from "../img/mock-airbnb-22.PNG";
import airbnbImg4 from "../img/mock-airbnb-33.PNG";
import airbnbImg5 from "../img/mock-airbnb-4.PNG";

const FeatureProject = () =>{

    const airbnbImg = [airbnbImg1,airbnbImg2,airbnbImg3,airbnbImg4,airbnbImg5];

    const languages = ["Javascript","React","Redux", "Scss/Sass"];


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
            {renderToolsUsed(languages)}
            {/* <p className = "">I created a mock Airbnb project to demonstrate my front-end development knowledge.</p> */}
            <h3 className=" heading-small ">Design Features: </h3>
            <ul className="feature-project__features" >
               <li className="feature-project__features__item">Login using your Google account</li>
               <li className="feature-project__features__item">(subpoint) Your first name and picture from Google will be shown on the navigation bar.</li>
               <li className="feature-project__features__item">Browse different types of listings and view their features, descriptions, and amenities.</li>
               <li className="feature-project__features__item">(subpoint) Listings are read (via REST-ful convention) from a JSON server under a "Bookings" collection.</li>
               <li className="feature-project__features__item">Reserve a room based on a start / end date and guest amount</li>
               <li className="feature-project__features__item">(subpoint) Reservations are connected to your Google ID, and POSTed on a JSON server under a "User" collection.</li>
               <li className="feature-project__features__item">View your reservation on "Your Trips" page.</li>
               <li className="feature-project__features__item">(subpoint) Reservations are rendered based on logged-in Google ID and read from the JSON server.</li>
           </ul>
          <ul>
              <li><a className = "feature-project__links" href = "https://pure-woodland-05379.herokuapp.com/">Live Demo</a></li>
              <li><a className = "feature-project__links" href = "https://github.com/tonytrinh3/mock-airbnb">Source Code</a></li>
              <li><Link className = "feature-project__links feature-project__links--arrow" to={`/projects/mock-airbnb`}>Read More About It</Link></li>
          </ul>
          
           
           
        </div>
    )
};

export default FeatureProject;