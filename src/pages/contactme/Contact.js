import React from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';
import Header from '../../components/header/Header.js';
import ContactForm from './ContactForm.js';
import ContactCards from './ContactCards.js';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            formState: "form",
            successState: "hidden",
            formVisibility: true,
            cardsVisibility: true,
            menuToggle: true,
            matches: window.matchMedia('(min-width: 668px)').matches,
        }
    }

    componentDidMount() {
        const handler = (e) => this.setState({ matches: e.matches});
        window.matchMedia('(min-width: 668px)').addListener(handler);

        if (this.state.matches) {
            this.setState({
                formVisibility: true,
                cardsVisibility: true,
            });
        } else if (!this.state.matches) {
            this.setState({
                formVisibility: true,
                cardsVisibility: false,
            })
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();

        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState({ [name]: value });
    }

    handleSendMessage = (e) => {
        e.preventDefault();

        setTimeout(() => {
            this.setState({
                formState: "hidden",
                successState: "formSubmitSuccess"
            });
        }, 200)

        let templateParams = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        };

        emailjs.send('lunas_contactForm', 'lunas_contactForm', templateParams, 'user_Z2bCXqQWaiSkGQAnZ7Rpj')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            formState: "formFadeOut",
        })
    }

    mobileToggleMessage = () => {
        this.setState({
            formVisibility: true,
            cardsVisibility: false,
            menuToggle: true,
        })
    }

    mobileToggleOther = () => {
        this.setState({
            formVisibility: false,
            cardsVisibility: true,
            menuToggle: false,
        })
    }

    render() {
        return(
            <div className='contentContainer'>
                <Header pageTitle='Contact Me' />

                <div className='content'>
                    <div className='welcome'>
                        <span className='bold'>Let's talk!</span>
                        <span>Here's how to get in touch with me:</span>
                    </div>

                    <div className='mobileToggle'>
                        <button className={this.state.menuToggle ? 'mobileToggleButton toggleButtonActive' : 'mobileToggleButton toggleButtonDisabled'} onClick={() => this.mobileToggleMessage()}>MESSAGE</button>
                        <button className={this.state.menuToggle ? 'mobileToggleButton toggleButtonDisabled' : 'mobileToggleButton toggleButtonActive'} onClick={() => this.mobileToggleOther()}>OTHER CONTACT</button>
                    </div>

                    
                    <ContactForm 
                        name={this.state.name}
                        email={this.state.email}
                        subject={this.state.subject}
                        message={this.state.message}
                        formState={this.state.formState}
                        successState={this.state.successState}
                        formVisibility={this.state.formVisibility}
                        handleInputChange={this.handleInputChange}
                        handleSendMessage={this.handleSendMessage}
                        />

                    <ContactCards cardsVisibility={this.state.cardsVisibility} />


                </div>
            </div>
        )
    }
}

export default withRouter(Contact);