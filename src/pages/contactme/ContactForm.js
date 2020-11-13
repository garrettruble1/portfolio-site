import React from 'react';
import './Contact.css';
import EmailJSIcon from '../../imgs/emailjslogo.png';
import LunasLogo from '../../imgs/LunasCircleLogoSmall.png';

function ContactForm(props) {

    return(
        <div className={props.formVisibility ? 'formContainer' : 'hidden'}>
                        <form method={props.method} onSubmit={props.handleSendMessage} className={props.formState}>

                            <h3 className='formHeader'>Send me a message!</h3>

                                <span className='formElement'>
                                    <label className='formLabel'>Your Name:</label>
                                    <input type='text' name='name' value={props.name} className='formInput' onChange={props.handleInputChange} required />
                                </span>

                                <span className='formElement'>
                                    <label className='formLabel'>Your Email:</label>
                                    <input type='text' name='email' value={props.email} className='formInput' onChange={props.handleInputChange} required />
                                </span>

                                <span className='formElement'>
                                    <label className='formLabel'>Message Subject:</label>
                                    <input type='text' name='subject' value={props.subject} className='formInput' onChange={props.handleInputChange} required />
                                </span>

                                <span className='formElement'>
                                    <label className='formLabel'>Your Message:</label>
                                    <textarea name='message' value={props.message} className='message' onChange={props.handleInputChange} required />
                                </span>

                                <span className='submitContainer'>
                                    <button type='submit' value='submit' className='submitButton'>Send Message</button>
                                </span>

                                <span className='formFooter'>Form powered by EmailJS <img src={EmailJSIcon} alt="EmailJS Icon" className='formFooterIcon'/></span>
                        </form>

                        <div className={props.successState}>
                            <img src={LunasLogo} alt="Success!" className='check' />
                            <h2 className='messageSent'>Message sent!</h2>
                        </div>
                    </div>
    )
}

export default ContactForm;