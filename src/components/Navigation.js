import React from 'react';
import {Link } from 'react-router-dom';

import headshot from "../img/headshot.jpg";
import github from "../img/github-image.svg";
import email from "../img/mail.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";
import close from '../img/close.svg';
import home from '../img/home.svg';

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

    renderNavContent(){
        return this.props.ids.map((id,i)=>{
            return <li className = "navigation__content__items__item" key = {i}><a href={`#${id}`} className = "navigation__content__items__item">{this.props.contentTitle[i]}</a></li>
        })
    }

    renderContent(){
        return(
            <div className="navigation__content">
                <Link className="navigation__content__img" to={`/`}><img src={headshot} alt="headshot" className="navigation__content__img"/></Link>
                {/* <img src={headshot} alt="headshot" className="navigation__content__img"/> */}
                <h2 className="navigation__content__header ">Tony Trinh</h2>
                <p className = "navigation__content__quote heading-small">Looking for a Front End Development Job <br/> (as of July 2020)</p>
                <ul className = "navigation__content__items">
                    {this.renderNavContent()}
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
                
                {this.state.toggleDropdown ? <img src={close} alt="Close" className="navigation__content__dropdown__close" onClick={this.toggleDropdown}/> : null }
                
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
                
                <img src={require("../img/open-menu.svg")} alt="" className="navigation__nav-btn" onClick={this.toggleDropdown}/>
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
