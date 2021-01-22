import React from 'react';
import {RenderToolsUsed} from '../utils/ToolsUsed';

const Card = ({title,img,languages,description,liveLink,sourceLink,i}) =>{
    return (
        <div className="card u-margin-bottom-medium" key ={i}>
            <img className = "card__img" src={img} alt = {title}/>
            <div className="card__description">
                <h3 className="card__description__title heading-med " >{title}</h3>
                {RenderToolsUsed(languages)}
                <p className="card__description__paragraph">{description}</p>
                {/* <ul>
                    <li>Features</li>
                    <li>a</li>
                    <li>a</li>
                </ul> */}
                <a className="link" href = {liveLink} >Live Demo</a> <br/>
                <a className="link" href = {sourceLink}>Source Code</a>
            </div>
        </div>
    )
};

export default Card;