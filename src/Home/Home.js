import React from 'react';
import {Component} from 'react';
import './Home.css';
import bgImage from '../Assets/header-2-bg.jpg';

class Home extends Component {
    render(){
       return(
           <div id = "home">
               <img id = "backGroundImage" src = {bgImage} alt = {bgImage} ></img>
               <p id = "intro">Hello, Iam Vignesh.<br></br> I am a Web and Roku developer.</p>
           </div>
       )     
    }
}

export default Home