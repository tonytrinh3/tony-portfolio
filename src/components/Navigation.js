import React from 'react';

import headshot from "../img/headshot.jpg";

const Navigation = () => {
    return(

        <div className = "navigation">
            <img src={headshot} alt="headshot" className="navigation__img"/>
            <h2 className="navigation__header heading-big">Tony Trinh</h2>
            <p className = "navigation__description">I got reprogrammed by a rogue AI and now I'm totally cray</p>
            <ul className = "navigation__items">
                <li className = "navigation__item">About</li>
                <li className = "navigation__item">Things I Can Do</li>
                <li className = "navigation__item">Projects</li>
                <li className = "navigation__item">Resume</li>
            </ul>

            <ul className="navigation__icons">
                <li><a href="#" className="navigation__icon navigation__icon--1 icon--twitter">Twitter</a></li>
                <li><a href="#" className="navigation__icon navigation__icon--2 icon--github"><span class="label">Github</span></a></li>
            </ul>
        </div>
    )
};

export default Navigation

{/* <img src={require("../img/ucb_eecs_logo_header.svg")} alt="Berkely Logo"/> */}

{/* <a href="/" className="navigation__img"><img src={logo} alt="Berkely Logo"/></a>
<a href = "./about.html" className="navigation__button navigation__button--1">
    Home
    <span className="navigation__caret"></span>
</a>
<a href = "./research.html" className="navigation__button navigation__button--2">
    Projects
    <span className="navigation__caret"></span>
</a>
<a href = "./publications.html" className="navigation__button navigation__button--3">
    Resume
    <span className="navigation__caret"></span>
</a>
<a className="navigation__button navigation__button--4">
    Contacts
    <span className="navigation__caret"></span>
</a>
    <a className="navigation__button navigation__button--4">
    Connect
    <span className="navigation__caret"></span>
</a> */}