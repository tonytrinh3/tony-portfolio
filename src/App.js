import React from 'react';
import "./sass/main.scss";
import { BrowserRouter,Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ContentPage from './components/ContentPage';


class App extends React.Component{

  render(){
    return(
      <BrowserRouter >
        <div className = "container">
          <Route path = "/" exact component ={ MainPage } />
          <Route path = "/projects/mock-airbnb" exact component ={ ContentPage } />
        </div>
      </BrowserRouter>

  
    )

  }

};

export default App;
