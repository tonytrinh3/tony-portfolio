import React from 'react';



const FeatureProject = () =>{
    return (
        <div className="feature-project u-section-padding">
           <h2 className="heading-big u-margin-bottom-small">Featured Project</h2>
           <img src={require("../img/mock-airbnb-1.PNG")} alt="" className = "feature-project__img u-margin-bottom-small"/>
           <h2 className="heading-med u-margin-bottom-small">mock-airbnb</h2>
           <ul className="feature-project__tools-used " >
            <h3 className="feature-project__tools-used__header heading-small ">Tools Used: </h3>
               <li className="feature-project__tools-used__items">React JS</li>
               <li className="feature-project__tools-used__items">Redux</li>
               <li className="feature-project__tools-used__items">Sass / SCSS</li>
           </ul>
            <p className = "u-margin-bottom-medium">Faucibus sed lobortis aliquam lorem blandit. 
            Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat 
            praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. 
            Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. 
            Adipiscing cubilia elementum.</p>

        </div>
    )
};

export default FeatureProject;