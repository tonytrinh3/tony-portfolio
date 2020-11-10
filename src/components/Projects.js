import React from 'react';
import { Link } from 'react-router-dom';
import Card from "./Card";
import { connect } from 'react-redux'


const renderCard = (projects) => {
    return projects.map((project, i) => {
        const {
            title,
            img,
            languages,
            description,
            liveLink,
            sourceLink
        } = project

        return <Card
            key={i}
            title={title}
            img={img}
            languages={languages}
            description={description}
            liveLink={liveLink}
            sourceLink={sourceLink}

        />
    })
}

//only want the first two element
const Projects = (props) => {

    return (
        <div id="projects" className="projects u-section-padding">
            <h2 className="heading-big u-margin-bottom-small ">Other Front-End Development Projects</h2>
            {renderCard(props.projects.slice(0, 2))}
            <Link className="header-small projects__more-projects" to={`/projects/other`}>More Projects</Link>

        </div>
    )
};


const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: Object.values(state.projects)
    }
}

export default connect(mapStateToProps, null)(Projects);


