import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import AirbnbPage from "./views/AirbnbPage";
import OtherProjectsPage from "./views/OtherProjectsPage";
import ScrollToTop from "./ScrollToTop";

import hazardTracker from "img/hazard-tracker-gif.gif";
import iVite from "img/ivite-gif.gif";
// import monday from "img/monday.png";
import monday from "img/bidhub-gif.gif";

import airbnb from "img/mock-airbnb/mock-airbnb-gif.gif";
import warReact from 'img/war-react-gif.gif';
import war from 'img/war.PNG';
import portfolio from 'img/portfolio.PNG';
import rockpaperscissor from 'img/rps-gif.gif';
import twitterMobile from 'img/twitter-mobile-gif.gif';

import * as stdWords from "utils/standardWords";


const App = () => {
  const projects = {
    EDF:{
      title: "Hazard Tracker (Nov 2020 - Present)",
      img: hazardTracker,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.REDUX, stdWords.SCSS_SASS],
      description:
        "In collaboration with the Environmental Defense Fund, Progressive Web App that allow citizens to view and report pollution events within their neighborhood via text/photos/videos. The reports will be used by officials for environmental advocacy.",
      liveLink: "/",
      sourceLink: "/",
    },
    monday:{
      title: "Construction Bidder (Nov 2020)",
      img: monday,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.REDUX, stdWords.SCSS_SASS],
      description:
        "As apart of monday apps challenge hackathon, this app allows contractors to bid on projects through the monday.com platform.",
      liveLink: "https://drive.google.com/file/d/1JBBeVPmb_YGT1X4A6KNGVR_4Gio8-nPm/view?usp=sharing",
      sourceLink: "https://github.com/MondayChallenge",
    },
    rockpaperscissor:{
      title: "Rock Paper Scissor Lizard Spock",
      img: rockpaperscissor,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.SCSS_SASS],
      description:
        `Part of a hiring coding challenge, I had to build a \"Rock Paper Scissor\" game, 
        with the bonus of adding \"Lizard and Spock\" into the mix. The game works on desktop 
        browser and mobile as well and the score is saved on your local session.`,
      liveLink: "https://master.d2de3czecw1nna.amplifyapp.com/",
      sourceLink: "https://github.com/tonytrinh3/rock-paper-scissors",
    },
    twitter_mobile:{
      title: "Twitter Mobile",
      img: twitterMobile,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.SCSS_SASS],
      description:
        `Part of a hiring coding challenge, I had to build a web app that fetches tweets based on the handler. The web app
        needs to fit within the mobile screen, and there needs to be infinite scrolling to fetch tweets continuously as you scroll.`,
      liveLink: "https://github.com/tonytrinh3/twitter-mobile",
      sourceLink: "https://github.com/tonytrinh3/twitter-mobile",
    },
    ivite:{
      title: "iVite",
      img: iVite,
      languages: [stdWords.DART, stdWords.FLUTTER],
      description:
        "As apart of the DeveloperWeek Entreprise Hackathon 2020, this mobile app allows users to decide on an event on the go.",
      liveLink: "https://drive.google.com/file/d/1vVS24w8Ek-DUxTGEkm4S0eJozqPm_9_q/view?usp=sharing",
      sourceLink: "https://github.com/iVite/FlutterMobileApp",
    },
    airbnb:{
      title: "Mock-Airbnb Website",
      img: airbnb,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.REDUX, stdWords.SCSS_SASS],
      description:
        `Mimic website to Airbnb to showcase proficency in ${stdWords.SCSS_SASS}, 
        ${stdWords.REACT}, ${stdWords.REDUX}. Data from the website communicates with JSON API to store user’s data.`,
      liveLink: "https://master.d14eeu5976vw2v.amplifyapp.com/",
      sourceLink: "https://github.com/tonytrinh3/mock-airbnb",
    },
    portfolio:{
      title: "Tony Trinh Portfolio ",
      img: portfolio,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.SCSS_SASS],
      description: "Portfolio Website. Mobile Ready.",
      liveLink: "https://master.d24dxum0mrr5fo.amplifyapp.com/",
      sourceLink: "https://github.com/tonytrinh3/tony-portfolio",
    },
    warReact:{
      title: "War, The Card Game v2",
      img: warReact,
      languages: [stdWords.JAVASCRIPT, stdWords.REACT, stdWords.SCSS_SASS],
      description:
        "Uses Deck Api. Uses similar functions from  the previous JS only version of this game.",
      liveLink: "https://tonytrinh3.github.io/war-react/",
      sourceLink: "https://github.com/tonytrinh3/war-react",
    },
    war:{
      title: "War, The Card Game v1",
      img: war,
      languages: [stdWords.JAVASCRIPT, stdWords.SCSS_SASS],
      description: "Uses Deck Api. Built with vanilla JS.",
      liveLink: "https://tonytrinh3.github.io/war/",
      sourceLink: "https://github.com/tonytrinh3/war",
    }
  }
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="container">
        <Route
          path="/"
          exact
          component={() => {
            return <MainPage projects={projects} />;
          }}
        />
        <Route path="/projects/mock-airbnb" exact component={AirbnbPage} />
        <Route
          path="/projects/other"
          exact
          component={() => {
            return <OtherProjectsPage projects={Object.values(projects)} />;
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
