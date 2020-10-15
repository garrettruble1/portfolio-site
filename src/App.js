import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeLink from './components/HomescreenLogo/HomeLink.js'
import Navigation from './components/nav/Navigation.js';
import Footer from './components/footer/Footer.js';
import Resume from './Resume.js';
import Logo from '../src/imgs/LunasCircleLogo.png'
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      navMenuOpen: false,
    }
  }

  toggleNavMenu = () => {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    })
  }

  closeNavMenu = () => {
    this.setState({
      navMenuOpen: false
    })
  }
  
  render() {
    return (
      <div>
        <HomeLink />
        <Navigation menuState={this.state.navMenuOpen} menuToggle={this.toggleNavMenu} menuClose={this.closeNavMenu} />

      <Switch>

        <Route exact path='/'>
          <div className='placeholderLayout'>
            <img src={ Logo } alt='Lunas Logo' className='logoPlaceholder' />
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

      <Footer />
      </div>
    );
  }
}

export default App;
