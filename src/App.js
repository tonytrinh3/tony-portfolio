import React from 'react';
import "./sass/main.scss";
import { BrowserRouter,Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AirbnbPage from './views/AirbnbPage';
import OtherProjectsPage from './views/OtherProjectsPage';
import ScrollToTop from './ScrollToTop';


class App extends React.Component{

  render(){
    return(
      <BrowserRouter >
        <ScrollToTop />
 
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
