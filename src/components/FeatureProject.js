import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import { RenderToolsUsed } from "../utils/ToolsUsed";

import airbnbImg1 from "../img/mock-airbnb/mock-airbnb-11.PNG";
import airbnbImg2 from "../img/mock-airbnb/mock-airbnb-front-2.PNG";
import airbnbImg3 from "../img/mock-airbnb/mock-airbnb-22.PNG";
import airbnbImg4 from "../img/mock-airbnb/mock-airbnb-33.PNG";
import airbnbImg5 from "../img/mock-airbnb/mock-airbnb-4.PNG";

import { ReactComponent as RightArrow } from "img/core-icons/right-arrow.svg";
import { ReactComponent as BlackCircle } from "img/core-icons/black-circle.svg";


import { ImgText } from "utils/ImgText";

const FeatureProject =({project})=>{
   
 
    const airbnbImg = [
      airbnbImg1,
      airbnbImg2,
      airbnbImg3,
      airbnbImg4,
      airbnbImg5,
    ];

    //TODO: HAVE TO PULL FROM REDUCER BETTER WAY
   
    return (
      <div
        id="feature-project"
        className="feature-project u-section-first-padding u-margin-bottom-small"
      >
        <h2 className="feature-project__header heading-huge u-margin-bottom-small ">
          Feature Project
        </h2>
        <Carousel infiniteLoop useKeyboardArrows  autoPlay className="feature-project__carousel">
          {airbnbImg.map((img, i) => {
            return (
              <div key={i}>
                <img alt={`airbnb img ${i}`} src={img} />
              </div>
            );
          })}
        </Carousel>
        {/* <img src={require("../img/mock-airbnb-1.PNG")} alt="" className = "feature-project__img u-margin-bottom-small"/>
               <img src={require('../img/mock-airbnb-front-page.PNG')} alt="" className = "feature-project__img u-margin-bottom-small"/> */}
        <h2 className="heading-med ">mock-airbnb</h2>
        {RenderToolsUsed(project.languages)}
        {/* <p className = "">I created a mock Airbnb project to demonstrate my front-end development knowledge.</p> */}
        <h3 className=" heading-small ">Design Features: </h3>
        <ul className="feature-project__features">
          <li >
            <ImgText
              svg={<BlackCircle className="svg svg--left svg--body-color svg--black-circle" />}
              direction={"left"}
              text={"Login using your Google account"}
            />
          </li>
          <li >
            <ImgText
              svg={<BlackCircle className="svg svg--left svg--body-color svg--black-circle" />}
              direction={"left"}
              text={"Browse and view different listings via CRUD operations."}
            />
          </li>
          <li >
            <ImgText
              svg={<BlackCircle className="svg svg--left svg--body-color svg--black-circle " />}
              direction={"left"}
              text={"  Reserve a room based on dates and guest."}
            />
          </li>
          <li >
            <ImgText
              svg={<BlackCircle className="svg svg--left svg--body-color svg--black-circle"  />}
              direction={"left"}
              text={"View your reservation on 'Your Trips' page."}
            />
          </li>
        </ul>
        <ul >
          <li>
            <a className="feature-project__links" href={project.liveLink}>
              Live Demo
            </a>
          </li>
          <li>
            <a
              className="feature-project__links"
              href={project.sourceLink}
            >
              Source Code
            </a>
          </li>
          <li>
            <Link
              className="feature-project__links"
              to={`/projects/mock-airbnb`}
            >
              <ImgText
                svg={<RightArrow className="svg svg--right svg--orange" />}
                direction={"right"}
                text={"Read More About It"}
              />
            </Link>
          </li>
        </ul>
      </div>
    );

}

export default FeatureProject;
