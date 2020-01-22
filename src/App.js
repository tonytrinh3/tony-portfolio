import React from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Breadcrumb from './components/Breadcrumb';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';

// import './sass/main.scss';

class App extends React.Component{

  render(){
    return(
      <div className = "container">
        <Header/>
        <Navigation/>
        <Breadcrumb />
        <Banner />
        <Cards />
        <Footer />
      </div>
  
    )

  }

};

export default App;
