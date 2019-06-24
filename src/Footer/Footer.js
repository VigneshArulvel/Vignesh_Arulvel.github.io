import React from 'react';
import {Component} from 'react';
import './Footer.css';
import linkedIn from '../Assets/linkedin.png';
import instagram from '../Assets/instagram.png';
import facebook from '../Assets/facebook.png';

class Footer extends Component {
    render(){
       return(
           <div id = "footer">
                <div id = "footerContent">
                    <div id = "footerSocialMedia">
                        <a id = "footerLink" href = "https://www.linkedin.com/in/vignesh-arulvel-7bb152176"><img id = "linkedIn" src = {linkedIn} alt = {linkedIn}></img></a>
                        <a id = "footerLink" href = "https://www.instagram.com/vignesh__sam/"><img id = "linkedIn" src = {instagram} alt = {instagram}></img></a>
                        <a id = "footerLink" href = "https://www.facebook.com/sam.vignesh.395"><img id = "linkedIn" src = {facebook} alt = {facebook}></img></a>
                    </div>
                    <div id = "footerLine">
                        © 2018 vignesh Arulvel. All rights reserved.
                    </div>
                </div>
           </div>
       )     
    }
}

export default Footer