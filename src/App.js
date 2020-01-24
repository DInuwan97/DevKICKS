import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './components/Dinuwan/NavBar/NavBar'
import AboutUsBanner from './components/Dinuwan/AboutUs/AboutUsBannerComponent/AboutusBanner';
import VisionMission from './components/Dinuwan/AboutUs/VisionMisionComponent/VisionMission';
import Partners from './components/Dinuwan/AboutUs/PartnersComponent/Partners';
import Testimonials from './components/Dinuwan/AboutUs/Testimonials/Testimonials';


export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
          <AboutUsBanner/>
          <VisionMission/>
          <Partners/>
          <Testimonials/>
        

        </div>
      </Router>
    );
  }
}

export default App;
