import React from 'react';
import "./sass/main.scss";
import { BrowserRouter,Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AirbnbPage from './components/AirbnbPage';
import OtherProjectsPage from './components/OtherProjectsPage';


class App extends React.Component{

  render(){
    return(
      <BrowserRouter >
        <div className = "container">
          <Route path = "/" exact component ={ MainPage } />
          <Route path = "/projects/mock-airbnb" exact component ={ AirbnbPage } />
          <Route path = "/projects/other" exact component ={ OtherProjectsPage } />
        </div>
      </BrowserRouter>

  
    )

  }

};

export default App;
