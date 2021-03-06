import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation'

import Footer from '../components/Footer'


const AirbnbPage = () =>{

    const ids = ["#front-end","#back-end"];
    const contentTitle = ["Front End Structure","Back End / Data Structure"];
    
    return (

           <div className = "main-page">
                <Header/>
                <Navigation
                    ids = {ids}
                    contentTitle = {contentTitle}
                />
                {content()}
               
                <Footer />
            </div>

    )
};


const content = () =>{
    return (
        <div className="airbnb-page u-section-first-padding">
           <h2 className="airbnb-page__header heading-big ">mock-airbnb: Full-Stack Layout Study</h2>
           <img src={require("../img/mock-airbnb/mock-airbnb-11.PNG")} alt="" className = "airbnb-page__img airbnb-page__img--1 u-margin-bottom-small"/>
           <h3 id = "front-end" className=" heading-medium ">Front End Structure</h3>
           <p>On the front-end, I am using React as the framework to build the website. To manage the website's state, I am using Redux to allow a centralized state for all components within the project to access. 
               Below shows the current website's functionalities and their corresponding actions to the Redux store in order to show the basic layout of the data flow through the cycle.</p>
           <img src={require('../img/mock-airbnb/mock-airbnb-front-page.PNG')} alt="" className = "airbnb-page__img airbnb-page__img--2 u-margin-bottom-small"/>
           <p>In terms of expansion, for the front-end, I am planning to add more functionalities for new hosts to create room listings for the website, as well as allowing users to edit and delete their reservations. </p>
           <img src={require('../img/mock-airbnb/mock-airbnb-react-redux.png')} alt="" className = "airbnb-page__img airbnb-page__img--3 u-margin-bottom-small"/>

           {/* <img src={require('../img/mock-airbnb-google-auth.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/>
           <img src={require('../img/mock-airbnb-google-auth2.png')} alt="" className = "airbnb-page__img u-margin-bottom-small"/> */}
           <p>When a user is logged into the app, they have several choices to create, view, and update their reservations while a user, who is not logged in, will only get a chance to view the listings.</p>
           <img src={require('../img/mock-airbnb/mock-airbnb-login.png')} alt="" className = "airbnb-page__img airbnb-page__img--4 u-margin-bottom-small"/>
           <p>Below shows the different actions and their corresponding routes that were used to request data from the website's back-end API.</p>
           <img src={require('../img/mock-airbnb/mock-airbnb-route.png')} alt="" className = "airbnb-page__img airbnb-page__img--5 u-margin-bottom-small"/>
           
           <h3 id = "back-end" className=" heading-medium ">Back End / Data Structure</h3>
           <p>Within website's database, I currently have two collections, bookings (room listings) and users. The bookings collection currently has host, locations, reviews, and reservation dates being embedded within each records. 
            The users collection has a unique user id, that is from Google Authentication, a general id, given by Axios, and reservations dates, chosen by the user.
            Both the bookings and users collection are referencing each other (two-way referencing) in order for the each booking to know the user's who are reservating the rooms as well as user's to know which rooms they reserved via the bookingID.   </p>
           <img src={require('../img/mock-airbnb/mock-airbnb-db.png')} alt="" className = "airbnb-page__img airbnb-page__img--6 u-margin-bottom-small"/>
           <p>Currently, website's database is within a mock API server; the data lives on a db.json file. I am planning to expand the back-end of the website to Node.Js / Express with MongoDB in order to hold our database online. </p>
           <p> In terms of changing the back-end technology moving forward, I also have plans of changing the database in case of further expansion of the website. Embedded locations, host info, reviews, and reservations within the room listings are not efficient down the line if the website scales in users and hosts. 
               Below shows the plan to dividing those data into separate collections within MongoDB and their referencing / relationship with each other. </p>
            <p>User's record is being referenced by the reviews record and reservation record because a user can write multiple reviews (hence 1 user to MANY reviews) and book multiple reservations. </p>
            <p>Room Listings (Bookings) record references the locations' record and host's record via their locationID and hostID (parent referencing) in order to know where the location of the bookings is as well as who is hosting the rooms. 
                When a user is searching a location to find a room to reserve, the specific locationID can be searched within the room listings collection to find all the rooms with the same location ID.  </p>
            <p>Both reservations record and reviews record reference the room listings (booking) ID and user ID in order to recall back to the specific room reservation and the review for the room. A room can have multiple reservations and reviews, but a reservation and review can only belong to a singular room.  </p>
           <img src={require('../img/mock-airbnb/mock-airbnb-data.png')} alt="" className = "airbnb-page__img airbnb-page__img--7 u-margin-bottom-small"/>
     
     
        </div>
    )
};

export default AirbnbPage;