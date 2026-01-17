import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";


import Footer from "../components/Footer";
import Card from "../components/Card";

const ids = [];
const contentTitle = [];

const content = (projects) => {
  const renderCard = () => {
    // console.log(this.props.projects);
    return projects.map((project, i) => {
      const {
        title,
        img,
        languages,
        description,
        liveLink,
        sourceLink,
      } = project;

      return (
        <Card
          key={i}
          title={title}
          img={img}
          languages={languages}
          description={description}
          liveLink={liveLink}
          sourceLink={sourceLink}
        />
      );
    });
  };

  return (
    <div id="other-projects" className="projects-page u-section-padding">
      <h2 className="heading-big u-margin-bottom-small ">
        Other Front-End Development Projects
      </h2>
      {renderCard()}
    </div>
  );
};

const OtherProjectsPage = (props) => {
   console.log(props);
  return (
    <div className="main-page">
      <Header />
      <Navigation ids={ids} contentTitle={contentTitle} />
      {content(props.projects)}
      <Footer />
    </div>
  );
};


export default OtherProjectsPage;
