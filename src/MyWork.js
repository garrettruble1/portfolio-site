import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/header/Header.js';

function MyWork () {
    return(
        <div className='sampleContainer'>
            <Header pageTitle='My Work' />
        </div>
    )
}

export default withRouter(MyWork);