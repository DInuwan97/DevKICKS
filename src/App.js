import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './components/Dinuwan/NavBar/NavBar'
import AboutUS from './components/Dinuwan/AboutUs/AboutUsComponent/aboutUs'
import Footer from './components/Dinuwan/Footer/Footer';
import Hero from './components/HomeComponent/hero'

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
          
          <Route path="/" component = {Hero}/>
          <Route path="/about" component = {AboutUS}/>
          
        <Footer/>

        </div>
      </Router>
    );
  }
}

export default App;
