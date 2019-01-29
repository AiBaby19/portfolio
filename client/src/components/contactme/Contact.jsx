import React, {Component} from 'react';
import './contact.css';
import Notification from '../thankyoupage/Notification';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const validator = require("email-validator");

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleName = (e) => {
        this.setState({name: e.currentTarget.value});
    }

    handleEmail = (e) => {
        this.setState({email: e.currentTarget.value});
    }

    handleMessage = (e) => {
        this.setState({message: e.currentTarget.value});
    }

    async sendEmail(name, email, message) {

        if (!name || !email || !message) {;
            toast.error("Please fill all the form")
            return;
        }

        if (validator.validate(email) === false) {
            toast.error("Please enter a valid email");
            return;
        }

        await fetch('/contact/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Content-Security-Policy': 'font-src *'
            },

            body: JSON.stringify({name: name, email: email, message: message})
        }).then(toast.warn("We'll be in touch!"))

        
        this.setState({name: '', email: '', message: ''});
    };

    render() {

        //github & linkdin icons
        const socialImg = [
            {
                img: "/img/git.jpg",
                altImg: "git",
                link: "https://github.com/dvash999"
            }, {
                img: "/img/ld.png",
                altImg: "linkdin",
                link: "https://www.linkedin.com/in/dror-dvash/"
            }
        ]

        //placeholder data & functionality
        const placeHolders = [
            {
                type: "text",
                name: "name",
                placeholder: "Name",
                value: this.state.name,
                onChange: this.handleName
            }, {
                type: "email",
                name: "email",
                placeholder: "Your Email",
                value: this.state.email,
                onChange: this.handleEmail
            }, {
                type: "message",
                name: "message",
                placeholder: "Message",
                value: this.state.message,
                onChange: this.handleMessage
            }

        ]

        return (
            <div className="wrapper">
                <Notification/>
                <h1 className="contactMe-headline">Contact me :D</h1>
                <form className='form' action="/contact/send" method="POST">
                    {placeHolders.map(({type, name, placeholder, value, onChange}) => {
                        return (<input
                            key={placeholder}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            className="placeholderDesign"/>)
                    })}
                    <button
                        className="btn-contact"
                        type="button"
                        onClick={() => this.sendEmail(this.state.name, this.state.email, this.state.message)}>
                        Send
                    </button>
                </form>

                <div className="social-icons-div">
                    {socialImg.map(({img, altImg, link}) => {
                        return (<img
                            key={altImg}
                            src={img}
                            alt={altImg}
                            height="50"
                            width="50"
                            style={{cursor: "pointer"}}
                            onClick={() => window.open(link)}/>)
                    })}
                </div>
            </div>
        );
    }
}

export default Contact;