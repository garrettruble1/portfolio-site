import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerClass: "headerContainer",
            decorClass: "headerDecoration",
            linesClass: "headerLines",
            titleClass: "headerTitle"
        }
    }

    componentDidMount(){
         window.addEventListener('scroll', () => this.getWindowHeight());
     }
   
    componentWillUnmount(){
         window.removeEventListener('scroll', () => this.getWindowHeight());
     }

    getWindowHeight = () => {

        const distanceY = window.pageYOffset ||
          document.documentElement.scrollTop
        const shrinkOn = 200;
    
        if (distanceY > shrinkOn) {
          this.setState({
            headerClass: "headerContainerSmall",
            decorClass: "headerDecorationSmall",
            linesClass: "headerLinesSmall",
            titleClass: "headerTitleSmall"
          })
        } else {
            this.setState({
                headerClass: "headerContainer",
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
                <span className={this.state.titleClass}>{this.props.pageTitle}</span>
                <span className={this.state.decorClass}></span>
                <span className={this.state.linesClass}></span>
            </header>
        )
    }
}

export default Header;