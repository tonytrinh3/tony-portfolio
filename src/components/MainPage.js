import React from 'react';

import Header from './Header';
import Navigation from './Navigation'
import FeatureProject from './FeatureProject'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Footer from './Footer'




const MainPage = () =>{
    return (

           <div className = "main-page">
                <Header/>
                <Navigation/>
                <FeatureProject />
                <hr className="u-hline"/>
                <Projects />
                <hr className="u-hline"/>
                <Skills/>
                <hr className="u-hline"/>
                <About/>
                <Footer />
            </div>

    )
};

export default MainPage;

