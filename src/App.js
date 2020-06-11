import React from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FeatureProject from './components/FeatureProject';
import Footer from './components/Footer';

// import './sass/main.scss';

class App extends React.Component{

  render(){
    return(
      <div className = "container">
        <Header/>
        <Navigation/>
        <FeatureProject />
        <hr className="u-hline"/>
        <Projects />
        <hr className="u-hline"/>
        <Skills/>
        <hr className="u-hline"/>
        <About/>
        <Footer />
      </div>
  
    )

  }

};

export default App;
