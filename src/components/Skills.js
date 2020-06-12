import React from 'react';

const Skills = () =>{
    return (
        <section id = "skills" className="skills u-section-padding">
             <h2 className="skills__heading heading-big ">Things I Can Do</h2>
             <p className = "skills__paragraph u-margin-bottom-medium">Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
            
            <ul className="skills__list skills__list--left">
                <li className="skills__list__header heading-small ">Current skills:</li>
                <img src={require("../img/html-css-js.png")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--1">HTML / CSS / Javascript</li>
                <img src={require("../img/Sass_Logo_Color.svg")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--2">Sass / SCSS with BEM Naming Methodology </li>
                <img src={require("../img/react-redux.PNG")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--3">React JS with Redux</li>
                {/* <img src={require("../img/html-5.svg")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--4">REST-ful Convention</li> */}
            </ul>
            <ul className="skills__list skills__list--right">
            <li className="skills__list__header heading-small ">Currently Learning:</li>
                <img src={require("../img/nodejs.svg")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--5">Node JS</li>
                <img src={require("../img/html-5.svg")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--6">Express JS</li>
                <img src={require("../img/mongodb.svg")} alt="" className="skills__list__icon"/>
                <li className="skills__list__item skills__list__item--7">MongoDB with Mongoose JS</li>

            </ul>
            
        </section>
    )
}

export default Skills;