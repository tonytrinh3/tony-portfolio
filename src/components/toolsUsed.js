import React from 'react';

export const renderToolsUsed = (languages) =>{
    return(
        <ul className="tools-used" >
        <h3 className="tools-used__header heading-small ">Tools Used: </h3>
        {
            languages.map(language=>{
                return <li className="tools-used__item">{language}</li>
            })
        }
        </ul>
    );
}  



