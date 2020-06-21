import React from 'react';

import Header from './Header';
import Navigation from './Navigation'

import AirbnbPage from './AirbnbPage'

import Footer from './Footer'




const ContentPage = () =>{
    return (

           <div className = "main-page">
                <Header/>
                <Navigation/>
                <AirbnbPage />
               
                <Footer />
            </div>

    )
};

export default ContentPage;

