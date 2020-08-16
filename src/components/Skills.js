import React from 'react';

const Skills = () =>{
    return (
        <section id = "skills" className="skills u-section-padding">
             <h2 className="skills__heading heading-big u-margin-bottom-small ">Things I Can Do</h2>
             {/* <p className = "skills__paragraph u-margin-bottom-medium"></p> */}
            
            <ul className="skills__list skills__list--left">
                <li className="skills__list__header heading-small ">Current Skills:</li>
                <img src={require("../img/html-css-js.png")} alt="html" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--1">HTML / CSS / Javascript</li>
                <img src={require("../img/Sass_Logo_Color.svg")} alt="sass" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--2">Sass / SCSS with BEM Naming Convention </li>
                <img src={require("../img/react-redux.PNG")} alt="react" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--3">React JS with Redux</li>
                <img src={require("../img/git-icon.png")} alt="git" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--4">Git and NPM</li>
                {/* <img src={require("../img/building.svg")} alt="building" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--4">4 years Consulting with Engineers/Architects</li> */}
                <img src={require("../img/nodejs.svg")} alt="node" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--5">Node JS with Express</li>
                <img src={require("../img/mongodb.svg")} alt="mongo" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--6">MongoDB with Mongoose JS</li>
            </ul>
            <ul className="skills__list skills__list--right">
            <li className="skills__list__header heading-small ">Currently Learning:</li>
                <img src={require("../img/typescript.svg")} alt="typescript" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--7">Typescript</li>
                <img src={require("../img/jest-logo.svg")} alt="jest" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--8">Jest</li>
            </ul>

       
            
        </section>
    )
}

export default Skills;