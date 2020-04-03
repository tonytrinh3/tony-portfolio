import React from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Breadcrumb from './components/Breadcrumb';
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
        <About/>
        <div className="u-hline"></div>
        <Skills/>
        <div className="u-hline"></div>
        {/* <Breadcrumb /> */}
        {/* <Banner />
        <Cards /> */}
        <Projects />
        <Footer />
      </div>
  
    )

  }

};

export default App;
