import { combineReducers } from "redux";

import airbnb from "../img/mock-airbnb-11.PNG";
import warReact from '../img/war-react.PNG';
import war from '../img/war.PNG';
import portfolio from '../img/portfolio.PNG';

// const INITIAL_STATE = [
//     {
//         title: "Mock-Airbnb Website",
//         img: airbnb,
//         languages:["Javascript","React", "Redux","Scss/Sass"],
//         description: "Mimic website to Airbnb to showcase proficency in CSS, React, Redux. Data from the website communicates with JSON API to store user’s data.",
//         liveLink: "https://github.com/tonytrinh3/mock-airbnb",
//         sourceLink: "https://pure-woodland-05379.herokuapp.com/"

//     },
//     {
//         title: "War, The Card Game v2",
//         img: warReact,
//         languages:["Javascript","React", "Scss/Sass"],
//         description: "Uses Deck Api. Uses similar functions from  the previous JS only version of this game.",
//         liveLink: "https://tonytrinh3.github.io/war-react/",
//         sourceLink: "https://github.com/tonytrinh3/war-react"
//     },
//     {
//         title: "War, The Card Game v1",
//         img: war,
//         languages:["Javascript", "Scss/Sass"],
//         description: "Uses Deck Api. Built with vanilla JS.",
//         liveLink: "https://tonytrinh3.github.io/war/",
//         sourceLink: "https://github.com/tonytrinh3/war"
//     },
//     {
//         title: "Tony Trinh Portfolio ",
//         img: portfolio,
//         languages:["Javascript","React", "Scss/Sass"],
//         description: "Portfolio Website. Mobile Ready.",
//         liveLink: "https://master.d24dxum0mrr5fo.amplifyapp.com/",
//         sourceLink: "https://github.com/tonytrinh3/tony-portfolio"
//     }
// ]



// const projectsReducer = (state = INITIAL_STATE, action )=>{
//     switch (action.type){
//         case "FETCH_PROJECTS":
//             return {...state}
//         default: 
//             return state;
//     }
// }

const projectsReducer = ()=>{
  return [https://master.d14eeu5976vw2v.amplifyapp.com/
    {
        title: "Mock-Airbnb Website",
        img: airbnb,
        languages:["Javascript","React", "Redux","Scss/Sass"],
        description: "Mimic website to Airbnb to showcase proficency in CSS, React, Redux. Data from the website communicates with JSON API to store user’s data.",
        liveLink: "https://master.d14eeu5976vw2v.amplifyapp.com/",
        sourceLink: "https://github.com/tonytrinh3/mock-airbnb"

    },
    {
        title: "Tony Trinh Portfolio ",
        img: portfolio,
        languages:["Javascript","React","Redux", "Scss/Sass"],
        description: "Portfolio Website. Mobile Ready.",
        liveLink: "https://master.d24dxum0mrr5fo.amplifyapp.com/",
        sourceLink: "https://github.com/tonytrinh3/tony-portfolio"
    },
    {
        title: "War, The Card Game v2",
        img: warReact,
        languages:["Javascript","React", "Scss/Sass"],
        description: "Uses Deck Api. Uses similar functions from  the previous JS only version of this game.",
        liveLink: "https://tonytrinh3.github.io/war-react/",
        sourceLink: "https://github.com/tonytrinh3/war-react"
    },
    {
        title: "War, The Card Game v1",
        img: war,
        languages:["Javascript", "Scss/Sass"],
        description: "Uses Deck Api. Built with vanilla JS.",
        liveLink: "https://tonytrinh3.github.io/war/",
        sourceLink: "https://github.com/tonytrinh3/war"
    }

]
}



export default combineReducers({
    projects: projectsReducer
})