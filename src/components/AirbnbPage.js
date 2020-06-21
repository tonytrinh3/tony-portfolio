import React from 'react';
import {Link } from 'react-router-dom';



const AirbnbPage = () =>{
    return (
        <div className="airbnb-page u-section-first-padding">
           <h2 className="airbnb-page__header heading-huge ">Feature Project</h2>
           <img src={require("../img/mock-airbnb-1.PNG")} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <p>On the front-end, we are using React to build website components with Redux to allow a centralized state for all components within the project to access. 
               Below shows the current website functionalities and their corresponding actions to the Redux store in order to show a basic layout of the data flow through the cycle.</p>
           <img src={require('../img/mock-airbnb-front-page.PNG')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <p>In terms of expansion, for the front-end, I am planning to more functionalities for new hosts to create room listings for the website, as well as allowing users to edit and delete their reservations. </p>
           <img src={require('../img/mock-airbnb-react-redux.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>

           {/* <img src={require('../img/mock-airbnb-google-auth.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <img src={require('../img/mock-airbnb-google-auth2.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/> */}
           <p>When a user is logged into the app, they have choices to create, view, and update their reservation while user who is not logged in will only get a chance to view the listings.</p>
           <img src={require('../img/mock-airbnb-login.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <p>Below shows the different actions and their corresponding routes that were used to request data from the website's back-end API.</p>
           <img src={require('../img/mock-airbnb-route.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <p>Within our database, we currently have two collections, bookings (room listings) and users. The bookings collection currently has host, locations, reviews, and reservation dates being embedded within each records. 
            The users collection has a unique user id that is from Google Authentication, as well as a general id given by Axios, and reservations dates.
            Both the bookings and users collection are referencing each other (two-way referencing) in order for the each booking to know the user's who are reservating the rooms as well as user's to know which rooms they reserved via the bookingID.   </p>
           <img src={require('../img/mock-airbnb-db.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <p>Currently, our database is within a mock API server, the data lives on a db.json file. I am planning to expand the back-end of the website to Node.Js / Express with MongoDB used to hold our database. </p>
           <p> In terms of changing the back-end technology moving forward, I also have plans of changing the database in case of further expansion of the website. Embedded locations, host info, reviews, and reservations within the room listings is not efficient down the line if the website scales in users and hosts. 
               Below shows the plan to dividing those data into separate collections within MongoDB and their referencing / relationship with each other. </p>
            <p>User's record is being referenced by the reviews and reservation because a user can write multiple reviews (hence 1 user to MANY reviews) and book multiple reservation. </p>
            <p>Room Listings (Bookings) record references the locations' record and host's record via their locationID and hostID (parent referencing) in order to know where the location of the bookings is as well as who is hosting the records. 
                When a user is searching a location to find a room to reserve, we can search the specific locationID within the room listings collection to find all the rooms with the same location ID.  </p>
            <p>Both reservations record and reviews record reference the room listings (booking) ID and user ID in order to recall back to the specific room reservation and the review for the room. A room can have multiple reservations and reviews, but a reservation and review can only belong to a singular room.  </p>
           <img src={require('../img/mock-airbnb-data.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
     
     
           {/* <img src={require('../img/mock-airbnb-array.PNG')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <img src={require('../img/mock-airbnb-object.PNG')} alt="" className = "airbnb-page__img u-margin-bottom-small"/> */}
           <h2 className="heading-med ">mock-airbnb</h2>
           <ul className="airbnb-page__tools-used" >
            <h3 className="airbnb-page__tools-used__header heading-small ">Tools Used: </h3>
                <li className="airbnb-page__tools-used__item">Javascript</li>
               <li className="airbnb-page__tools-used__item">React JS</li>
               <li className="airbnb-page__tools-used__item">Redux</li>
               <li className="airbnb-page__tools-used__item">Sass / SCSS</li>
           </ul>
            {/* <p className = "">I created a mock Airbnb project to demonstrate my front-end development knowledge.</p> */}
            <h3 className=" heading-small ">Design Features: </h3>
            <ul className="airbnb-page__features" >
               <li className="airbnb-page__features__item">Login using your Google account</li>
               <li className="airbnb-page__features__item">(subpoint) Your first name and picture from Google will be shown on the navigation bar.</li>
               <li className="airbnb-page__features__item">Browse different types of listings and view their features, descriptions, and amenities.</li>
               <li className="airbnb-page__features__item">(subpoint) Listings are read (via REST-ful convention) from a JSON server under a "Bookings" collection.</li>
               <li className="airbnb-page__features__item">Reserve a room based on a start / end date and guest amount</li>
               <li className="airbnb-page__features__item">(subpoint) Reservations are connected to your Google ID, and POSTed on a JSON server under a "User" collection.</li>
               <li className="airbnb-page__features__item">View your reservation on "Your Trips" page.</li>
               <li className="airbnb-page__features__item">(subpoint) Reservations are rendered based on logged-in Google ID and read from the JSON server.</li>
           </ul>

           <Link className="" to={`/projects/mock-airbnb`}>Read More About It</Link>
        </div>
    )
};

export default AirbnbPage;