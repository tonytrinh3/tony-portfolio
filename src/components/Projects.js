import React from 'react';
import {Link } from 'react-router-dom';
import Card from "./Card";
import warReact from '../img/war-react.PNG';
import portfolio from '../img/portfolio.PNG';

const cardContents = [
    {
        title: "War, The Card Game",
        img: warReact,
        languages:["Javascript","React", "Scss/Sass"],
        description: "awefawef"
    },
    {
        title: "Tony Trinh Portfolio ",
        img: portfolio,
        languages:["Javascript","React", "Scss/Sass"],
        description: "awefawef"
    },
]

const renderCard = () =>{
    return cardContents.map((content,i)=>{
        const {
            title,
            img,
            languages,
            description
        } = content

        return <Card 
            key = {i}
            title = {title}
            img = {img}
            languages = {languages}
            description = {description}
        />
    })
}


const Projects = () =>{
    return (
        <div id = "other-projects" className="projects u-section-padding">
           <h2 className="heading-big u-margin-bottom-small ">Other Front-End Development Projects</h2>
            {renderCard()}
            <Link className="header-small" to={`/projects/other`}>More Projects</Link>
    
        </div>
    )
};

export default Projects;