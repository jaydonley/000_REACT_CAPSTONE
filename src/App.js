import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import about from './components/about';
import callToAction from './components/callToAction';
import Contact from './components/Contact';
import cultureHistory from './components/cultureHistory';
import diverseDynamic from './components/diverseDynamic';
import footer from './components/footer';
import header from './components/header';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import portfolio from './components/portfolio';
import socialLinksAtBottom from './components/socialLinksAtBottom';
import TeamPage from './components/TeamPage';
import testimonials from './components/testimonials';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className='App'>
      <Router>
        
        <Navbar/>
        <Route exact path= '/' component={LandingPage} />
        <Route path= '/teamPage' component={TeamPage} />
        <Route path= '/cultureHistory' component={cultureHistory} />
        <Route path= '/Contact' component={Contact} />
        
        <footer/>
       </Router>
       </div>
     
    )
  }
}

export default App;