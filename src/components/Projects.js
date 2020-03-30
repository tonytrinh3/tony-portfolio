import React from 'react';
import Card from "./Card";


const Projects = () =>{
    return (
        <div className="projects u-section-padding">
           <h2 className="heading-big ">Front End Web Development Projects</h2>
            <p className = "u-margin-bottom-medium">Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
            <Card/>
            <div className="card-hline"></div>
            <Card/>
            <div className="card-hline"></div>
            <Card/>
        </div>
    )
};

export default Projects;