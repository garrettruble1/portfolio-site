import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/header/Header.js';

function Resume () {
    return(
        <div className='contentContainer'>
            <Header pageTitle='Resume' />
        </div>
    )
}

export default withRouter(Resume);