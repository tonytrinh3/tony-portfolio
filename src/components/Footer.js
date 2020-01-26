import React from 'react';
import '../sass/main.scss';

const Footer = () =>{
    return(

    <footer className="footer">
        <img src={require("../img/ucb_eecs_logo_footer.svg")} alt="Berkeley Logo" className="footer__img"/>
        <p className="copyright">Copyright &copy; 2019; all rights reserved </p>
    </footer>
    )
}


    
export default Footer;