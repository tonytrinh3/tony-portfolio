import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation'
import FeatureProject from '../components/FeatureProject'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import Footer from '../components/Footer'




const MainPage = (props) =>{

    const ids = ["#feature-project","#skills","#projects","#about", "https://docs.google.com/document/d/13bopMoB0u2IBDBegGcxsZ1siC3OxIH6JjbyvKjjH6zk/edit?usp=sharing"];
    const contentTitle = ["Feature Project","Things That I Can Do","Other Projects","About","Resume"];
    
    return (

           <div className = "main-page">
                <Header/>
                <Navigation 
                    ids = {ids}
                    contentTitle = {contentTitle}
                />
                <FeatureProject 
                    project = {props.projects["airbnb"]}
                />
                <hr className="u-hline"/>
                <Skills/> 
                <hr className="u-hline"/>
                <Projects 
                     projects = {props.projects}
                />
                <hr className="u-hline"/>
                <About/>
                <Footer />
            </div>

    )
};

export default MainPage;

