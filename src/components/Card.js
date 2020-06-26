import React from 'react';
import {renderToolsUsed} from './toolsUsed';

const Card = ({title,img,languages,description,liveLink,sourceLink}) =>{
    return (
        <div className="card u-margin-bottom-medium">
            <img className = "card__img"src={img}/>
            <div className="card__description">
                <h3 className="card__description__title heading-med">{title}</h3>
                {renderToolsUsed(languages)}
                <p className="card__description__paragraph paragraph">{description}</p>
                <ul>
                    <li>Features</li>
                    <li>a</li>
                    <li>a</li>
                </ul>
                <a className="card__description__paragraph paragraph" href = {liveLink} >Live Demo</a> <br/>
                <a className="card__description__paragraph paragraph" href = {sourceLink}>Source Code</a>
            </div>
        </div>
    )
};

export default Card;