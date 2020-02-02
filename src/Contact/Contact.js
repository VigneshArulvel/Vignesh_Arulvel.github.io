import React from 'react';
import {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText : "SEND MESSAGE"
        }
    }
    submitClicked= () => {
        if (this.state.buttonText !== "MESSAGE SENT"){
            if (this.refs.contactName.value !== "" && this.refs.contactNumber.value !== "" && this.refs.contactLastName.value !== "" && this.refs.contactEmail.value !== "" && this.refs.contactMessage.value !== ""){
                this.setState({buttonText : "MESSAGE SENT"})
            }
        }

    }

    handleScroll = (e) => {
        let scrollPosition = window.pageYOffset; 
        if (scrollPosition > 1315){
            var contact = document.getElementById("contact")
            if (contact.className === "contact") {
                contact.className += "Animation";
            }
        }
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    render(){
        return(
           <div id = "contact" className = "contact">
                <p id = "contactTitle">CONTACT ME</p>
                <p id = "contactDesc">Have a question or want to work together?</p>
                <form>
                    <div id = "contactForm">
                        <input type="textbox" ref = "contactName" id="contactName" placeholder = "Your name" required/> 
                        <input type="textbox" ref = "contactLastName" id="contactLastName" placeholder = "Your last name" required/>
                    </div>
                    <div id = "contactForm">
                        <input type="email" ref = "contactEmail" id="contactEmail" placeholder = "Your email id" required/> 
                        <input type="textbox" ref = "contactNumber" id="contactNumber" placeholder = "Your mobile number" required/>
                    </div>
                    <div id = "contactForm">
                        <textarea id="contactMessage" ref = "contactMessage" placeholder = "Your message" required/>
                    </div>
                    <div id = "contactForm">
                        <button onClick = {this.submitClicked} ref = "contactButton" id = "contactButton">{this.state.buttonText}</button>
                    </div>
                </form>
           </div>
       )     
    }
}

export default Contact