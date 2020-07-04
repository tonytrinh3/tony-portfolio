import React from 'react';

import Header from './Header';
import Navigation from './Navigation'
import FeatureProject from './FeatureProject'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Footer from './Footer'




const MainPage = () =>{

    const ids = ["#feature-project","#skills","#projects","#about", "https://drive.google.com/file/d/1kRJZ6N-R5lFLEHdqHURJ1r98Cnd637v0/view?usp=sharing"];
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

