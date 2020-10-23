import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/header/Header.js';

function Contact () {
    return(
        <div className='sampleContainer'>
            <Header pageTitle='Contact Me' />
        </div>
    )
}

export default withRouter(Contact);