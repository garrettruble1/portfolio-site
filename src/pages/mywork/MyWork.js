import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/header/Header.js';

function MyWork () {
    return(
        <div className='contentContainer'>
            <Header pageTitle='My Work' />
        </div>
    )
}

export default withRouter(MyWork);