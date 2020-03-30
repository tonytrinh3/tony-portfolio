import React from 'react';


const Card = (props) =>{
    return (
        <div className="card u-margin-bottom-medium">
            <img src={require("../img/ancadragan-laughing-crop.jpg")} alt="women_laughing" className="card__img"/>
            <div className="card__description">
                <h3 className="card__descrtipion__title heading-med">Academics</h3>
                <p className="card__descrtipion__paragraph paragraph">Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet. Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
            </div>
        </div>
    )
};

export default Card;