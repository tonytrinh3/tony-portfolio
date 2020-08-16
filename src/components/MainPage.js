import React from 'react';

import Header from './Header';
import Navigation from './Navigation'
import FeatureProject from './FeatureProject'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Footer from './Footer'




const MainPage = () =>{

    const ids = ["#feature-project","#skills","#projects","#about", "https://docs.google.com/document/d/13bopMoB0u2IBDBegGcxsZ1siC3OxIH6JjbyvKjjH6zk/edit?usp=sharing"];
    const contentTitle = ["Feature Project","Things That I Can Do","Other Projects","About","Resume"];

    return (

           <div className = "main-page">
                <Header/>
                <Navigation 
                    ids = {ids}
                    contentTitle = {contentTitle}
                />
                <FeatureProject />
                <hr className="u-hline"/>
                <Skills/> 
                <hr className="u-hline"/>
                <Projects />
                <hr className="u-hline"/>
                <About/>
                <Footer />
            </div>

    )
};

export default MainPage;

