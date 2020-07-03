import React from 'react';
import {Link } from 'react-router-dom';
import Card from "./Card";
import warReact from '../img/war-react.PNG';
import portfolio from '../img/portfolio.PNG';

const cardContents = [
    {
        title: "War, The Card Game v2",
        img: warReact,
        languages:["Javascript","React", "Scss/Sass"],
        description: "Uses Deck Api. Uses similar functions from  the previous JS only version of this game.",
        liveLink: "https://tonytrinh3.github.io/war-react/",
        sourceLink: "https://github.com/tonytrinh3/war-react"
    },
    {
        title: "Tony Trinh Portfolio ",
        img: portfolio,
        languages:["Javascript","React", "Scss/Sass"],
        description: "Portfolio Website. Mobile Ready.",
        liveLink: "https://protected-meadow-71280.herokuapp.com/",
        sourceLink: "https://github.com/tonytrinh3/tony-portfolio"
    },
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


const Projects = () =>{
    return (
        <div id = "projects" className="projects u-section-padding">
           <h2 className="heading-big u-margin-bottom-small ">Other Front-End Development Projects</h2>
            {renderCard()}
            <Link className="header-small projects__more-projects" to={`/projects/other`}>More Projects</Link>
    
        </div>
    )
};

export default Projects;