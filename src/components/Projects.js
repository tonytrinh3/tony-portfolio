import React from 'react';
import {Link } from 'react-router-dom';
import Card from "./Card";
import {connect} from 'react-redux'


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
        liveLink: "https://master.d24dxum0mrr5fo.amplifyapp.com/",
        sourceLink: "https://github.com/tonytrinh3/tony-portfolio"
    },
]

const renderCard = (projects) =>{
    return projects.map((project,i)=>{
        const {
            title,
            img,
            languages,
            description,
            liveLink,
            sourceLink
        } = project

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

//only want the first two element
class Projects extends React.Component{
    render(){
        return (
            <div id = "projects" className="projects u-section-padding">
               <h2 className="heading-big u-margin-bottom-small ">Other Front-End Development Projects</h2>
                {renderCard(this.props.projects.slice(0,2))} 
                <Link className="header-small projects__more-projects" to={`/projects/other`}>More Projects</Link>
        
            </div>
        )
    }

};

const mapStateToProps =(state)=>{
    console.log(state);
    return{
        projects: Object.values(state.projects)
    }
}

export default connect(mapStateToProps,null)(Projects);


