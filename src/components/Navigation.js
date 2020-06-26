import React from 'react';
import {Link } from 'react-router-dom';

import headshot from "../img/headshot.jpg";
import github from "../img/github-image.svg";
import email from "../img/mail.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";



class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toggleDropdown: false
        }
    }

    toggleDropdown=()=>{
       if(!this.state.toggleDropdown){
           this.setState({
               toggleDropdown:true
           })
       } else{
            this.setState({
                toggleDropdown:false
            })
       }
    }

    renderContent(){
        return(
            <div className="navigation__content">
                <Link className="navigation__content__img" to={`/`}><img src={headshot} alt="headshot" className="navigation__content__img"/></Link>
                {/* <img src={headshot} alt="headshot" className="navigation__content__img"/> */}
                <h2 className="navigation__content__header ">Tony Trinh</h2>
                <p className = "navigation__content__quote">I got reprogrammed by a rogue AI and now I'm totally cray</p>
                <ul className = "navigation__content__items">
                    
                    <li className = "navigation__content__items__item">Feature Project</li>
                    <li className = "navigation__content__items__item"><a href="#skills" className = "navigation__content__items__item">Things That I Can Do</a></li>
                    <li className = "navigation__content__items__item">Other Projects</li>
                
                    <li className = "navigation__content__items__item">About / Work Experience</li>
                    <li className = "navigation__content__items__item"><a href="https://www.google.com" className="awef">Resume</a></li>
                </ul>

                <div className="navigation__content__icons">
                    <a href="https://github.com/tonytrinh3">
                        <img src={github} alt="Github" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="mailto:tony@tonywtrinh.com">
                        <img src={email} alt="Email" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tony-trinh-b7b99919b/">
                        <img src={linkedin} alt="LinkedIn" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="https://twitter.com/Tony3trinh">
                        <img src={twitter} alt="Twitter" className="navigation__content__icons__icon"/>
                    </a>
                </div>

            </div>
       

        )

    }

    render(){
        return(

            <div className = "navigation">
                <div className="navigation__nav-btn" onClick={this.toggleDropdown}>button</div>
                {this.state.toggleDropdown ? this.renderContent() : null }
                {/* {this.renderContent()} */}
            </div>
        )

    }
   
};

export default Navigation
