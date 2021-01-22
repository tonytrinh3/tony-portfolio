import React from 'react';

export const RenderToolsUsed = (languages) =>{
    return(
        <ul className="tools-used" >
        <h3 className="tools-used__header heading-small ">Tools Used: </h3>
        {
            languages.map((language,i)=>{
                return <li className="tools-used__item" key ={i}>{language}</li>
            })
        }
        </ul>
    );
}  



