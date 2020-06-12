import React from 'react';
import "./sass/main.scss";
import MainPage from './components/MainPage';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter >
        <div className = "container">
          <Link path = "/" exact component ={ MainPage } />
        </div>
      </BrowserRouter>

  
    )

  }

};

export default App;
