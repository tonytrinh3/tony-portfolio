import React from 'react';
import '../sass/main.scss';

const Navigation = () => {
    return(

        <nav className = "navigation">
            <a href="/" className="navigation__img"><img src="../img/ucb_eecs_logo_header.svg" alt="Berkely Logo"/></a>
            <a href = "./about.html" className="navigation__button navigation__button--1">
                About
                <span className="navigation__caret"></span>
            </a>
            <a href = "./research.html" className="navigation__button navigation__button--2">
                Research
                <span className="navigation__caret"></span>
            </a>
            <a href = "./publications.html" className="navigation__button navigation__button--3">
                Publications
                <span className="navigation__caret"></span>
            </a>
            <a className="navigation__button navigation__button--4">
                People
                <span className="navigation__caret"></span>
            </a>
            <a className="navigation__button navigation__button--4">
                Connect
                <span className="navigation__caret"></span>
            </a>
        </nav>
    )
};

export default Navigation

