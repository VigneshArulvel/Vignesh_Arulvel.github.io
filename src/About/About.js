import React from 'react';
import {Component} from 'react';
import './About.css';
import profileImage from '../Assets/profile.jpg';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import ProgressBar from 'react-flexible-progressbar'
import 'react-flexible-progressbar/dist/progressBar.css'


class About extends Component {
    handleScroll = (e) => {
        let scrollPosition = window.pageYOffset; 
        if (scrollPosition > 120){
            var title = document.getElementById("title")
            if (title.className === "title") {
                title.className += "Animation";
            }
        }
        
        if (scrollPosition > 275){
            var imageContent = document.getElementById("imageContent")
            var progressHead = document.getElementById("progressHead")
            if (imageContent.className === "imageContent") {
                imageContent.className += "Animation";
                progressHead.className += "Animation";
            }
        }
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    render(){
        return(
           <section data-animate="fadeInUp" id = "about">
                <div>
                    <p id = "title" className = "title">ABOUT ME</p>
                </div>
                <div id = "divContent">
                    <div id = "imageContent" className = "imageContent"> 
                        <img id = "image" src = {profileImage} alt = {profileImage}></img>
                        <p id = "about1"> Web developer with 2 years of professional experience <br></br>in creating a responsive web application using React JS.
                        <br></br><br></br>Having experience in Javascript frameworks such as state <br></br>management library like Redux.
                        <br></br><br></br>Created roku smart tv application, having hands on<br></br> experience on the Brightscript.
                        </p>
                    </div>
                    <div id = "progressHead" className = "progressHead">
                        <div><p id = "language">REACT JS </p> <p id = "percentage">90%</p></div>
                        <ProgressBar id = "progressBar" height = "25px" progress = "90" showPercentage = "false" ></ProgressBar>
                        <div><p id = "language">HTML </p> <p id = "percentage">70%</p></div>
                        <ProgressBar id = "progressBar" height = "25px" progress = "70" showPercentage = "false" ></ProgressBar>
                        <div><p id = "language">CSS </p> <p id = "percentage">70%</p></div>
                        <ProgressBar id = "progressBar" height = "25px" progress = "70" showPercentage = "false" ></ProgressBar>
                        <div><p id = "language">REDUX </p> <p id = "percentage">60%</p></div>
                        <ProgressBar id = "progressBar" height = "25px" progress = "60" showPercentage = "false" ></ProgressBar>
                        <div><p id = "language">JAVASCRIPT </p> <p id = "percentage">70%</p></div>
                        <ProgressBar id = "progressBar" height = "25px" progress = "70" showPercentage = "false" ></ProgressBar>
                        <div><p id = "language">BRIGHTSCRIPT </p> <p id = "percentage">80%</p></div>
                        <div id = "bottomAbout"></div>
                        <ProgressBar id = "progressBar" height = "25px" progress = "80" showPercentage = "false" ></ProgressBar>
                    </div>
                </div>
           </section>
       )     
    }
}

export default About