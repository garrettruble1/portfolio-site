import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeLink from './components/HomescreenLogo/HomeLink.js'
import Navigation from './components/nav/Navigation.js';
import Footer from './components/footer/Footer.js';
import TopScroll from './components/scroll/TopScroll.js';
import PageIntro from './homeSections/intro/PageIntro.js';
import PageIntroMobile from './homeSections/intro/PageIntroMobile.js';
import AboutSection from './homeSections/about/AboutSection.js';
import AboutSectionM from './homeSections/about/AboutSectionM.js';
import WorkSection from './homeSections/work/WorkSection.js';
import WorkSectionM from './homeSections/work/WorkSectionM.js';
import ResumeSection from './homeSections/resume/ResumeSection.js';
import ResumeSectionM from './homeSections/resume/ResumeSectionM.js';
import ContactSection from './homeSections/contact/ContactSection.js';
import ContactSectionM from './homeSections/contact/ContactSectionM.js';
import Finish from './homeSections/fin/Finish.js';
import FinishMobile from './homeSections/fin/FinishMobile.js';
import Resume from './pages/resume/Resume.js';
import AboutMe from './pages/aboutme/AboutMe.js';
import MyWork from './pages/mywork/MyWork.js';
import Contact from './pages/contactme/Contact.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      desktopDisplay: true,
      mobileDisplay: false,
      matches: window.matchMedia('(min-width: 668px)').matches,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const handler = (e) => this.setState({ matches: e.matches});
    window.matchMedia('(min-width: 668px)').addListener(handler);

    if (this.state.matches) {
        this.setState({
            desktopDisplay: true,
            mobileDisplay: false,
        });
    } else if (!this.state.matches) {
        this.setState({
            desktopDisplay: false,
            mobileDisplay: true,
        })
    }
}

  render() {
    return (
      <>
        <HomeLink />
        <Navigation />

      <Switch>

        <Route exact path='/'>
          <div className={this.state.desktopDisplay ? 'desktopHomepage' : 'hidden'}>

              <PageIntro />

              <AboutSection />

              <WorkSection />

              <ResumeSection />

              <ContactSection />

              <Finish />

          </div>

          <div className={this.state.mobileDisplay ? 'mobileHomepage' : 'hidden'}>
            
            <PageIntroMobile />

            <AboutSectionM />

            <WorkSectionM />

            <ResumeSectionM />

            <ContactSectionM />

            <FinishMobile />

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
      </>
    );
  }
}

export default App;
