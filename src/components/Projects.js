import React from 'react';
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
        <div className="projects u-section-padding">
           <h2 className="heading-big u-margin-bottom-small ">Other Front-End Development Projects</h2>
            {/* <p className = "u-margin-bottom-medium">Faucibus sed lobortis aliquam lorem blandit. 
            Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat 
            praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. 
            Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. 
            Adipiscing cubilia elementum.</p> */}
            {renderCard()}
    
        </div>
    )
};

export default Projects;