import React from 'react';
import './TopScroll.css';

class TopScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClass: 'hidden'
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
        const showOn = 100;
    
        if (distanceY > showOn) {
          this.setState({
              buttonClass: 'topScrollButton'
          })
        } else {
            this.setState({
                buttonClass: 'hidden'
        });
      }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <button className={this.state.buttonClass} onClick={() => this.scrollToTop()}>
                <span></span>
                <span></span>
                <div className='scrollTip'>Scroll to Top</div>
            </button>
        )
    }
}

export default TopScroll;