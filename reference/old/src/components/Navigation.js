import React from 'react';
import '../sass/main.scss';

const Navigation = () => {
    return(

        <nav className = "navigation">
            <a href="/" className="navigation__img"><img src={require("../img/ucb_eecs_logo_header.svg")} alt="Berkely Logo"/></a>
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
            {/* <a className="navigation__button navigation__button--4">
                Connect
                <span className="navigation__caret"></span>
            </a> */}
        </nav>
    )
};

export default Navigation

