import React from 'react';

const Footer = () =>{
    return(

    <div className="footer">
        <img src={require("../img/ucb_eecs_logo_footer.svg")} alt="Berkeley Logo" className="footer__img"/>
        <p className="copyright">Copyright &copy; 2019; all rights reserved </p>
    </div>
    )
}


    
export default Footer;