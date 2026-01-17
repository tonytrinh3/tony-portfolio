import React from 'react';
import {Link } from 'react-router-dom';

import headshot from "../img/headshot.jpg";
import github from "../img/social-media-icons/github-image.svg";
import email from "../img/core-icons/mail.svg";
import linkedin from "../img/social-media-icons/linkedin.svg";
import twitter from "../img/social-media-icons/twitter.svg";
import close from '../img/core-icons/close.svg';
import home from '../img/core-icons/home.svg';
import menu from "../img/core-icons/open-menu.svg"

class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toggleDropdown: false,
            showHome: false
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

    renderNavContent(){
        return this.props.ids.map((id,i)=>{
            return <li className = "navigation__content__items__item" key = {i}><a href={`${id}`} className = "navigation__content__items__item">{this.props.contentTitle[i]}</a></li>
        })
    }

    renderContent(){
        return(
            <div className="navigation__content">
                <img src={headshot} alt="headshot" className="navigation__content__img" />
                <Link className="navigation__content__img" to={`/`}>
                    <div className="navigation__content__overlay">
                        <img src={home} alt="home" className="navigation__content__overlay__home"/>
                    </div>
                </Link>
                {/* <img src={headshot} alt="headshot" className="navigation__content__img"/> */}
                <h2 className="navigation__content__header ">Tony Trinh</h2>
                <p className = "navigation__content__citizen ">US Citizen</p>
                {/* <p className = "navigation__content__quote heading-small">Looking for a <span>Front End Development </span>Position <br/> (as of October 2020)</p> */}
                <ul className = "navigation__content__items">
                    {this.renderNavContent()}
                </ul>

                <div className="navigation__content__icons">
                    <a href="https://github.com/tonytrinh3">
                        <img src={github} alt="Github" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="mailto:tony.w.trinh3@gmail.com">
                        <img src={email} alt="Email" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tony-trinh-b7b99919b/">
                        <img src={linkedin} alt="LinkedIn" className="navigation__content__icons__icon"/>
                    </a>
                    <a href="https://twitter.com/Tony3trinh">
                        <img src={twitter} alt="Twitter" className="navigation__content__icons__icon"/>
                    </a>
                </div>
                
                {/* {this.state.toggleDropdown ? <img src={close} alt="Close" className="navigation__content__dropdown__close" onClick={this.toggleDropdown}/> : null } */}
                
            </div>
       
       

        )

    }

    renderContentMobile(){
        return (
            <div className="navigation__mobile">
                {this.renderContent()}
            </div>
            )

    }

    render(){
        return(

            <div className = "navigation">
                {!this.state.toggleDropdown ? <img src={menu} alt="" className="navigation__nav-btn" onClick={this.toggleDropdown}/> : <img src={close} alt="" className="navigation__nav-btn" onClick={this.toggleDropdown}/> }
                {/* <img src={require("../img/open-menu.svg")} alt="" className="navigation__nav-btn" onClick={this.toggleDropdown}/> */}
                {/* <p className="awef">Looking for a <span>Front End Development </span>Job <br/> (as of July 2020)</p> */}
                <Link to={`/`} className="navigation__home-btn"><img src={home} alt="home" className="navigation__home-btn"/></Link>
               
                {this.state.toggleDropdown ? this.renderContentMobile() : null }
                <div className="navigation__pc">
                    {this.renderContent()}
                </div>
            </div>
        )

    }
   
};

export default Navigation
