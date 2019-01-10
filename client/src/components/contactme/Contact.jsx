import React, {Component} from 'react';
import './contact.css';
import Notification from '../thankyoupage/Notification';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
        // if ()
        if (!name || !email.includes('@') || !message) {
            return alert("Please fill all the form correctly")
        }

        await fetch('/contact/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Content-Security-Policy': 'font-src *'
            },

            body: JSON.stringify({name: name, email: email, message: message})
        })

        toast.warn("We'll be in touch!");
        this.setState({name: '', email: '', message: ''});
    };

    render() {

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
            <div className="container">
                <Notification/>
                <h1 style={{
                    margin: '20px 0px 60px 0px'
                }}>Contact me :D</h1>
                <form className='form' action="/contact/send" method="POST">
                    {placeHolders.map(({type, name, placeholder, value, onChange}) => {
                        return (<input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            className="placeholderDesign"
                            required/>)
                    })}

                    <button
                        className="btn-contact"
                        type="submit"
                        onClick={() => this.sendEmail(this.state.name, this.state.email, this.state.message)}>
                        Send
                    </button>

                </form>

                <div className="social-icons-div">
                    {socialImg.map(({img, altImg, link}) => {
                        return (<img
                            src={img}
                            alt={altImg}
                            height="50"
                            width="50"
                            style={{
                            cursor: "pointer"
                        }}
                            onClick=
                            { () => window.open(link) }/>)
                    })}

                </div>

            </div>
        );
    }
}

export default Contact;