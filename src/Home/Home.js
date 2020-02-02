import React from 'react';
import {Component} from 'react';
import './Home.css';
import bgImage from '../Assets/header-2-bg.jpg';
import logo from '../Assets/Logo.png';

class Home extends Component {
    render(){
       return(
           <div id = "home">
               <img id = "backGroundImage" src = {bgImage} alt = {bgImage} ></img>
               <img id = "Logo" src = {logo} alt = {logo} ></img>
               <div id = "intro"> 
                    Hello, I am Vignesh. <br></br> I am a Web and Roku developer.
               </div>
               <div id = "subTitle">The guy who focuses on writing clean, elegant and efficient code.</div>
           </div>
       )     
    }
}

export default Home