import React from 'react';
import '../sass/main.scss';

const Banner = () =>{
    return(

    <div className = "banner">
        <figure className="banner__item"><img src={require("../img/GroupPhoto2016.jpg")} alt="Group Photo 2016" className="banner__img"/></figure>
        <div className="banner__content">
            <h1 className="banner__content__heading heading-big">Tony Trinh</h1>
            <h1 className="banner__content__heading heading-med">Front End Developer Portfolio</h1>
            <p className="banner__content__paragraph paragraph">
                Welcome to the Department of Electrical Engineering and Computer Sciences at UC Berkeley.
                Our top-ranked programs attract stellar students and professors from around the world, who pioneer the frontiers of information science and technology with broad impact on society.
                Underlying our success are a strong tradition of collaboration, close ties to industry, and a supportive culture.
                Explore our vibrant and dynamic community through this website or in person.
            </p>
            <img src={require("../img/iconmonstr-linkedin-3.svg")} alt="Group Photo 2016" className="banner__content__icon"/>
        </div>
    </div>
    )
};

export default Banner;
