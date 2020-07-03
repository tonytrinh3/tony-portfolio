import React from 'react';
import Header from './Header';
import Navigation from './Navigation'

import Footer from './Footer'
import Card from "./Card";
import airbnb from "../img/mock-airbnb-11.PNG";
import warReact from '../img/war-react.PNG';
import war from '../img/war.PNG';
import portfolio from '../img/portfolio.PNG';

const ids = [];
const contentTitle = [];

const OtherProjectsPage = () =>{
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
            title: "Mock-Airbnb Website",
            img: airbnb,
            languages:["Javascript","React", "Redux","Scss/Sass"],
            description: "Mimic website to Airbnb to showcase proficency in CSS, React, Redux. Data from the website communicates with JSON API to store user’s data.",
            liveLink: "https://github.com/tonytrinh3/mock-airbnb",
            sourceLink: "https://pure-woodland-05379.herokuapp.com/"

        },
        {
            title: "War, The Card Game v2",
            img: warReact,
            languages:["Javascript","React", "Scss/Sass"],
            description: "Uses Deck Api. Uses similar functions from  the previous JS only version of this game.",
            liveLink: "https://tonytrinh3.github.io/war-react/",
            sourceLink: "https://github.com/tonytrinh3/war-react"
        },
        {
            title: "War, The Card Game v1",
            img: war,
            languages:["Javascript", "Scss/Sass"],
            description: "Uses Deck Api. Built with vanilla JS.",
            liveLink: "https://tonytrinh3.github.io/war/",
            sourceLink: "https://github.com/tonytrinh3/war"
        },
        {
            title: "Tony Trinh Portfolio ",
            img: portfolio,
            languages:["Javascript","React", "Scss/Sass"],
            description: "Portfolio Website. Mobile Ready.",
            liveLink: "https://protected-meadow-71280.herokuapp.com/",
            sourceLink: "https://github.com/tonytrinh3/tony-portfolio"
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

