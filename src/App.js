import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeLink from './components/HomescreenLogo/HomeLink.js'
import Navigation from './components/nav/Navigation.js';
import Footer from './components/footer/Footer.js';
import TopScroll from './components/scroll/TopScroll.js';
import { motion } from 'framer-motion';
import Resume from './pages/resume/Resume.js';
import AboutMe from './pages/aboutme/AboutMe.js';
import MyWork from './pages/mywork/MyWork.js';
import Contact from './pages/contactme/Contact.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      initialize: true
    }
  }

  render() {
    return (
      <div>
        <HomeLink />
        <Navigation />

      <Switch>

        <Route exact path='/'>
          <div style={homepageSection}>
          </div>
        </Route>

        <Route path='/aboutme'>
          <AboutMe />
        </Route>

        <Route path='/mywork'>
          <MyWork />
        </Route>

        <Route path='/resume'>
          <Resume />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

      </Switch>

      <TopScroll />

      <Footer />
      </div>
    );
  }
}

const homepageSection = {
  height: '200vh',
}

export default App;
