import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/header/Header.js';

function AboutMe() {
    return (
        <div className="sampleContainer">
            <Header pageTitle="About Me" />
        </div>
    )
}

export default withRouter(AboutMe);