import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import callToAction from '../components/callToAction';
import contact from '../components/contact';
import footer from '../components/footer';
import header from '../components/header';
import homeLanding from '../components/homeLanding';
import diverseDynamic from '../components/diverseDynamic';
import navbar from '../components/navbar';
import socialLinksAtBottom from '../components/socialLinksAtBottom';
import teamPage from '../components/teamPage';
import testimonials from '../components/testimonials';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
        {/* <Navbar /> */}
        <Route exact path= '/' component={FF_Home} />
        <Route path= '/Attractions' component={Attractions} />
        <Route path= '/CultureIndustry' component={CultureIndustry} />
        <Route path= '/Team' component={Team} />
        <Route path= '/Contact' component={Contact} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;