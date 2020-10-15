import React from 'react';
import './burgerAnimation.css'

function NavBurger(props) {

    return(
        <div className="toggleContainer" onClick={() => props.menuToggle()}>
            <span className={props.menuState ? "hidden" : "menuLabel"}>Menu</span>
            <span className={props.menuState ? "menuLabelClose" : "hidden"}>Close</span>
            <div className={props.menuState ? "menuIcon open" : "menuIcon"}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default NavBurger;