import React from 'react';
import Header from './Header';
import Navigation from './Navigation'

import Footer from './Footer'
import Card from "./Card";
import warReact from '../img/war-react.PNG';
import portfolio from '../img/portfolio.PNG';



const OtherProjectsPage = () =>{

    const ids = ["front-end","back-end"];
    const contentTitle = ["Front End Structure","Back End / Data Structure"];
    return (

           <div className = "main-page">
                <Header/>
                <Navigation
                 ids = {ids}
                 contentTitle = {contentTitle}
                />
                {Content()}
                <Footer />
            </div>

    )
};

const Content = () =>{

    const cardContents = [
        {
            title: "War, The Card Game",
            img: warReact,
            languages:["Javascript","React", "Scss/Sass"],
            description: "awefawef",
            liveLink: "https://github.com/tonytrinh3/war-react",
            sourceLink: "https://github.com/tonytrinh3/war-react"

        },
        {
            title: "Tony Trinh Portfolio ",
            img: portfolio,
            languages:["Javascript","React", "Scss/Sass"],
            description: "awefawef",
            liveLink: "https://github.com/tonytrinh3/tony-portfolio",
            sourceLink: "https://github.com/tonytrinh3/tony-portfolio"
        },
        {
            title: "War, The Card Game",
            img: warReact,
            languages:["Javascript","React", "Scss/Sass"],
            description: "awefawef",
            liveLink: "https://github.com/tonytrinh3/war-react",
            sourceLink: "https://github.com/tonytrinh3/war-react"
        },
        {
            title: "Tony Trinh Portfolio ",
            img: portfolio,
            languages:["Javascript","React", "Scss/Sass"],
            description: "awefawef",
            liveLink: "https://github.com/tonytrinh3/war-react",
            sourceLink: "https://github.com/tonytrinh3/war-react"
        }
    ]
    
    const renderCard = () =>{
        return cardContents.map((content,i)=>{
            const {
                title,
                img,
                languages,
                description,
                liveLink,
                sourceLink
            } = content
    
            return <Card 
                key = {i}
                title = {title}
                img = {img}
                languages = {languages}
                description = {description}
                liveLink = {liveLink}
                sourceLink = {sourceLink}
            />
        })
    }
    
    return (
        <div id = "other-projects" className="projects-page u-section-padding">
            <h2 className="heading-big u-margin-bottom-small ">Other Front-End Development Projects</h2>
            {renderCard()}
        
 
        </div>

    )
};

export default OtherProjectsPage;

