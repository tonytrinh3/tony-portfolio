import React from 'react';



const FeatureProject = () =>{
    return (
        <div className="feature-project u-section-first-padding">
           <h2 className="feature-project__header heading-huge ">Feature Project</h2>
           <img src={require("../img/mock-airbnb-1.PNG")} alt="" className = "feature-project__img u-margin-bottom-small"/>
           <h2 className="heading-med ">mock-airbnb</h2>
           <ul className="feature-project__tools-used" >
            <h3 className="feature-project__tools-used__header heading-small ">Tools Used: </h3>
               <li className="feature-project__tools-used__items">React JS</li>
               <li className="feature-project__tools-used__items">Redux</li>
               <li className="feature-project__tools-used__items">Sass / SCSS</li>
           </ul>
            {/* <p className = "">I created a mock Airbnb project to demonstrate my front-end development knowledge.</p> */}
            <ul className="" >
            <h3 className=" heading-small ">Design Features: </h3>
               <li className="">Login using your Google account</li>
               <li className="">(subpoint) Your first name and picture from Google will be shown on the navigation bar.</li>
               <li className="">Browse different types of listings and view their features, descriptions, and amenities.</li>
               <li className="">(subpoint) Listings are read (via REST-ful convention) from a JSON server under a "Bookings" collection.</li>
               <li className="">Reserve a room based on a start / end date and guest amount</li>
               <li className="">(subpoint) Reservations are connected to your Google ID, and POSTed on a JSON server under a "User" collection.</li>
               <li className="">View your reservation on "Your Trips" page.</li>
               <li className="">(subpoint) Reservations are rendered based on logged-in Google ID and read from the JSON server.</li>
           </ul>
        </div>
    )
};

export default FeatureProject;