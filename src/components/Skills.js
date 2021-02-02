import React from "react";

import HTMLIcon from "img/language-icons/html-css-js.png";
import SASSIcon from "../img/language-icons/Sass_Logo_Color.svg";
import ReactIcon from "../img/language-icons/react-redux.PNG";
import GitIcon from "../img/language-icons/git-icon.png";
import NodeIcon from "../img/language-icons/nodejs.svg";
import MongoDBIcon from "../img/language-icons/mongodb.svg";

import JavaIcon from "../img/language-icons/java.svg";
import SpringIcon from "../img/language-icons/spring-icon.svg";
import MySQLIcon from "../img/language-icons/mysql.svg";
import FlutterIcon from "../img/language-icons/flutter.svg";
import FirebaseIcon from "../img/language-icons/Firebase_Logo_Logomark.svg";
import D3Icon from "../img/language-icons/d3-icon.svg";
import GraphQLIcon from "../img/language-icons/graphql-icon.svg";
import AWSIcon from "../img/language-icons/aws-icon.svg";

import TypescriptIcon from "../img/language-icons/typescript.svg";
import JestIcon from "../img/language-icons/jest-logo.svg";

import { ImgText } from "utils/ImgText";


import * as stdWords from "utils/standardWords";

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
          text={`${stdWords.HTML} / ${stdWords.CSS} / ${stdWords.JAVASCRIPT}`}
        />
        <ImgText img={SASSIcon} direction={"left"} text={"Sass / SCSS"} />
        <ImgText
          img={ReactIcon}
          direction={"left"}
          text={`${stdWords.REACT} with ${stdWords.REDUX}`}
        />
        <ImgText img={GitIcon} direction={"left"} text={`${stdWords.GIT} and ${stdWords.NPM}`} />
      </ul>

      <ul className="skills__list ">
        <li className="skills__list__header heading-small ">
          Some Experience:
        </li>
        <ImgText img={JavaIcon} direction={"left"} text={"Java"} />
        <ImgText
          img={SpringIcon}
          direction={"left"}
          text={`${stdWords.SPRING} (${stdWords.HIBERNATE}, ${stdWords.MAVEN}, ${stdWords.REST}, ${stdWords.BOOT})`}
        />
        <ImgText img={MySQLIcon} direction={"left"} text={`${stdWords.MYSQL}`} />
        <ImgText img={NodeIcon} direction={"left"} text={`${stdWords.NODEJS}`} />
        <ImgText
          img={MongoDBIcon}
          direction={"left"}
          text={`${stdWords.NOSQL} / ${stdWords.MONGODB}`}
        />
      </ul>

      <ul className="skills__list">
        <li className="skills__list__header heading-small ">Dabbled in:</li>
        {/* <ImgText img={TypescriptIcon} direction={"left"} text={"Typescript"} /> */}
        <ImgText img={FlutterIcon} direction={"left"} text={`${stdWords.DART} / ${stdWords.FLUTTER}`} />
        <ImgText img={FirebaseIcon} direction={"left"} text={`${stdWords.FIREBASE}`} />
        <ImgText img={D3Icon} direction={"left"} text={`${stdWords.D3}`} />
        <ImgText img={GraphQLIcon} direction={"left"} text={`${stdWords.GRAPHQL}`} />
        <ImgText img={AWSIcon} direction={"left"} text={`${stdWords.AWS} (${stdWords.GATEWAY})`} />
        <ImgText img={JestIcon} direction={"left"} text={"Jest / Enzyme"} />
      </ul>
    </section>
  );
};

export default Skills;
