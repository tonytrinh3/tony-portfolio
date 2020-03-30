import React from 'react';
import '../sass/main.scss';

const Card = () =>{
    return (
    <div className="card">
        <img src={require("../img/ancadragan-laughing-crop.jpg")} alt="women_laughing" className="card__img"/>
        {/* <h3 className="card__img__caption">CS Assistant Prof. Anca Dragan</h3> */}
        <div className="card__description">
            <h1 className="card__descrtipion__title heading-med">Academics</h1>
            <p className="card__descrtipion__parargraph paragraph">We offer one of the most comprehensive research and instructional programs in this field anywhere in the world.</p>
        </div>
        {/* <a href="#" className="card__btn btn--1">Graduate Admissions and Programs</a>
        <a href="#" className="card__btn btn--2">Graduate Admissions and Programs</a>
        <a href="#" className="card__btn btn--3">Graduate Admissions and Programs</a>
        <a href="#" className="btn">Learn More About Academics</a> */}
    </div>
    )
};

export default Card;