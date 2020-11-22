import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import NavBurger from './NavBurger.js';
import Wordmark from '../../imgs/LunasWordmarkLogo.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenuOpen: false,
            navMenuClass: 'navHidden'
        }
    }

    toggleNavMenu = () => {
        setTimeout(() => {
            this.setState({
                navMenuClass: this.state.navMenuOpen ? 'navContainer' : 'navHidden'
            });
        }, 400);

        this.setState({
          navMenuOpen: !this.state.navMenuOpen,
          navMenuClass: this.state.navMenuOpen ? 'navContainer navFadeOut' : 'navHidden navFadeIn'
        });
      }
    
      closeNavMenu = () => {
          setTimeout(() => {
              this.setState({
                  navMenuClass: 'navHidden'
              });
          }, 400);

        this.setState({
          navMenuOpen: false,
          navMenuClass: 'navContainer navFadeOut'
        });
      }

    render() {
        return (
            <div>
                <NavBurger menuState={this.state.navMenuOpen} menuToggle={this.toggleNavMenu}/>
                
                <nav className={this.state.navMenuClass} onClick={() => this.closeNavMenu()}>
                    <ul className="navList">
                        <li className="navItems"><Link to='/' className="navLinks"><img src={Wordmark} alt="Lunas" className="linkLogo" /></Link></li>
                        <li className="navItems"><Link to='/aboutme' className="navLinks">ABOUT ME</Link></li>
                        <li className="navItems"><Link to='/mywork' className="navLinks">MY WORK</Link></li>
                        <li className="navItems"><Link to='/resume' className="navLinks">RESUME</Link></li>
                        <li className="navItems"><Link to='/contact' className="navLinks">CONTACT ME</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;