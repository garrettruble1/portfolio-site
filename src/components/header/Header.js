import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerClass: "headerContainer",
            gradientClass: "contrastGradient",
            decorClass: "headerDecoration",
            linesClass: "headerLines",
            titleClass: "headerTitle"
        }
    }

    componentDidMount(){
         window.addEventListener('scroll', () => this.getWindowHeight());
     }
   
    componentWillUnmount(){
         window.removeEventListener('scroll',() => this.getWindowHeight());
     }

    getWindowHeight = () => {

        const distanceY = window.pageYOffset ||
          document.documentElement.scrollTop
        const shrinkOn = 50;
    
        if (distanceY > shrinkOn) {
          this.setState({
            headerClass: "headerContainerSmall",
            gradientClass: "contrastGradient",
            decorClass: "headerDecorationSmall",
            linesClass: "headerLinesSmall",
            titleClass: "headerTitleSmall"
          })
        } else {
            this.setState({
                headerClass: "headerContainer",
                gradientClass: "hidden",
                decorClass: "headerDecoration",
                linesClass: "headerLines",
                titleClass: "headerTitle"
        });
      }
    }

    render() {
        return (
            <header className={this.state.headerClass}>
                <span className={this.state.linesClass}></span>
                <span className={this.state.decorClass}></span>
                <h1 className={this.state.titleClass}>{this.props.pageTitle}</h1>
                <span className={this.state.decorClass}></span>
                <span className={this.state.linesClass}></span>
                <div className={this.state.gradientClass}></div>
            </header>
        )
    }
}

export default Header;