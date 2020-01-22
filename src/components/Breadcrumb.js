import React from 'react';
import '../sass/main.scss';



const Breadcrumb = () =>{
    return(
        <div className="breadcrumb">
            <ul>
                <li><a href="/" className="breadcrumb__link">Home</a></li>
                <li>About</li>
            </ul>
        </div>
    )
}



export default Breadcrumb;