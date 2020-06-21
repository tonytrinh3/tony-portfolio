import React from 'react';
import {Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const FeatureProject = () =>{
    return (
        <div className="feature-project u-section-first-padding">
           <h2 className="feature-project__header heading-huge ">Feature Project</h2>
           <Carousel autoPlay>
            <div >
                <img alt="" src={require("../img/mock-airbnb-1.PNG")}  />
           
            </div>
            <div>
                <img alt="" src={require("../img/mock-airbnb-front-2.PNG")} />
               {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img alt="" src={require("../img/mock-airbnb-2.PNG")} />
         
            </div>
            <div>
                <img alt="" src={require("../img/mock-airbnb-3.PNG")} />
     
            </div>
            <div>
                <img alt="" src={require("../img/mock-airbnb-4.PNG")} />
        
            </div>
       
           </Carousel>
           {/* <img src={require("../img/mock-airbnb-1.PNG")} alt="" className = "feature-project__img u-margin-bottom-small"/>
           <img src={require('../img/mock-airbnb-front-page.PNG')} alt="" className = "feature-project__img u-margin-bottom-small"/> */}
           <h2 className="heading-med ">mock-airbnb</h2>
           <ul className="feature-project__tools-used" >
            <h3 className="feature-project__tools-used__header heading-small ">Tools Used: </h3>
                <li className="feature-project__tools-used__item">Javascript</li>
               <li className="feature-project__tools-used__item">React JS</li>
               <li className="feature-project__tools-used__item">Redux</li>
               <li className="feature-project__tools-used__item">Sass / SCSS</li>
           </ul>
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

           <Link className="" to={`/projects/mock-airbnb`}>Read More About It</Link>
        </div>
    )
};

export default FeatureProject;