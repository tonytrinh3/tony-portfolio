import React from 'react';

import github from "../img/github-image.svg";
import email from "../img/mail.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";

const Footer = () =>{
    return(

    <div className="footer">
        <h3 className="footer__header heading-medium">Looking for a <span>Front End Development </span>Job <br/> (as of August 2020)</h3>
        <div className="footer__icons">
            <a href="https://github.com/tonytrinh3">
                <img src={github} alt="Github" className="footer__icons__icon"/>
            </a>
            <a href="mailto:tony@tonywtrinh.com">
                <img src={email} alt="Email" className="footer__icons__icon"/>
            </a>
            <a href="https://www.linkedin.com/in/tony-trinh-b7b99919b/">
                <img src={linkedin} alt="LinkedIn" className="footer__icons__icon"/>
            </a>
            <a href="https://twitter.com/Tony3trinh">
                <img src={twitter} alt="Twitter" className="footer__icons__icon"/>
            </a>
        </div>
        {/* <img src={require("../img/ucb_eecs_logo_footer.svg")} alt="Berkeley Logo" className="footer__img"/>
        <p className="copyright">Copyright &copy; 2019; all rights reserved </p> */}
    </div>
    )
}


    
export default Footer;