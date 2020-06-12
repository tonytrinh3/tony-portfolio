import React from 'react';

// import headshot from "../img/headshot.jpg";


const Navigation = () => {
    return(

        <div className = "navigation">
            <div className="navigation__content">
                <img src={require("../img/headshot.jpg")} alt="headshot" className="navigation__content__img"/>
                <h2 className="navigation__content__header ">Tony Trinh</h2>
                <p className = "navigation__content__quote">I got reprogrammed by a rogue AI and now I'm totally cray</p>
                <ul className = "navigation__content__items">
                    <li className = "navigation__content__items__item">Projects</li>
                    <li className = "navigation__content__items__item"><a href="#skills" className = "navigation__content__items__item">Things That I Can Do</a></li>
                    <li className = "navigation__content__items__item">About / Work Experience</li>
                    <li className = "navigation__content__items__item"><a href="https://www.google.com" className="awef">Resume</a></li>
                </ul>

                <div className="navigation__content__icons">
                    <a href="https://github.com/tonytrinh3">
                        <img src={require("../img/github-image.svg")} alt="Github" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="https://twitter.com/Tony3trinh">
                        <img src={require("../img/twitter.svg")} alt="Twitter" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tony-trinh-b7b99919b/">
                        <img src={require("../img/linkedin.svg")} alt="LinkedIn" className="navigation__content__icons__icon"/>
                    </a>
                </div>

            </div>
           
        </div>
    )
};

export default Navigation
