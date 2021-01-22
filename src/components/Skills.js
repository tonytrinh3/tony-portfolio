import React from "react";

import HTMLIcon from "../img/html-css-js.png";
import SASSIcon from "../img/Sass_Logo_Color.svg";
import ReactIcon from "../img/react-redux.PNG";
import GitIcon from "../img/git-icon.png";
import NodeIcon from "../img/nodejs.svg";
import MongoDBIcon from "../img/mongodb.svg";

import JavaIcon from "../img/java.svg";
import SpringIcon from "../img/spring-icon.svg";
import MySQLIcon from "../img/mysql.svg";
import FlutterIcon from "../img/flutter.svg";
import FirebaseIcon from "../img/Firebase_Logo_Logomark.svg";
import D3Icon from "../img/d3-icon.svg";
import GraphQLIcon from "../img/graphql-icon.svg";
import AWSIcon from "../img/aws-icon.svg";

import TypescriptIcon from "../img/typescript.svg";
import JestIcon from "../img/jest-logo.svg";

import { ImgText } from "utils/ImgText";

const Skills = () => {
  return (
    <section id="skills" className="skills u-section-padding">
      <h2 className="skills__header heading-big u-margin-bottom-small ">
        Things I Can Do
      </h2>
      {/* <p className = "skills__paragraph u-margin-bottom-medium"></p> */}

      <ul className="skills__list">
        <li className="skills__list__header heading-small ">
          Most Experienced:
        </li>
        <ImgText
          img={HTMLIcon}
          direction={"left"}
          text={"HTML / CSS / Javascript"}
        />
        <ImgText img={SASSIcon} direction={"left"} text={"Sass / SCSS"} />
        <ImgText
          img={ReactIcon}
          direction={"left"}
          text={"React JS with Redux"}
        />
        <ImgText img={GitIcon} direction={"left"} text={"Git and NPM"} />
      </ul>

      <ul className="skills__list ">
        <li className="skills__list__header heading-small ">
          Some Experience:
        </li>
        <ImgText img={JavaIcon} direction={"left"} text={"Java"} />
        <ImgText
          img={SpringIcon}
          direction={"left"}
          text={"Spring (Hibernate, Maven, REST, Boot)"}
        />
        <ImgText img={MySQLIcon} direction={"left"} text={"MySQL"} />
        <ImgText img={NodeIcon} direction={"left"} text={"Node JS"} />
        <ImgText
          img={MongoDBIcon}
          direction={"left"}
          text={"NoSQL / MongoDB"}
        />
      </ul>

      <ul className="skills__list">
        <li className="skills__list__header heading-small ">Dabbled in:</li>
        {/* <ImgText img={TypescriptIcon} direction={"left"} text={"Typescript"} />
        <ImgText img={JestIcon} direction={"left"} text={"Jest"} /> */}
        <ImgText img={FlutterIcon} direction={"left"} text={"Dart / Flutter"} />
        <ImgText img={FirebaseIcon} direction={"left"} text={"Firebase"} />
        <ImgText img={D3Icon} direction={"left"} text={"D3.js"} />
        <ImgText img={GraphQLIcon} direction={"left"} text={"GraphQL"} />
        <ImgText img={AWSIcon} direction={"left"} text={"AWS (Gateway)"} />
      </ul>
    </section>
  );
};

export default Skills;
