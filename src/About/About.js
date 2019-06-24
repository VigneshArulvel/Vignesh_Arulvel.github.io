import React from 'react';
import {Component} from 'react';
import './About.css';
import profileImage from '../Assets/profile.jpg';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import ProgressBar from 'react-flexible-progressbar'
import 'react-flexible-progressbar/dist/progressBar.css'


class About extends Component {
    render(){
        return(
           <section id = "about">
                <p id = "title">ABOUT ME</p>
                <div>
                    <img id = "image" src = {profileImage} alt = {profileImage}></img>
                    <p id = "about1"> Web developer with 2 years of professional experience <br></br>in creating a responsive web application using React JS.
                    <br></br><br></br>Having experience in Javascript frameworks such as state <br></br>management library like Redux.
                    <br></br><br></br>Created roku smart tv application, having hands on<br></br> experience on the Brightscript.
                    </p>
                </div>
                <div id = "progressHead">
                    <div><p id = "language">REACT JS </p> <p id = "percentage">90%</p></div>
                    <ProgressBar id = "progressBar" height = "25px" progress = "90" showPercentage = "false" ></ProgressBar>
                    <div><p id = "language">HTML </p> <p id = "percentage">70%</p></div>
                    <ProgressBar id = "progressBar" height = "25px" progress = "70" showPercentage = "false" ></ProgressBar>
                    <div><p id = "language">CSS </p> <p id = "percentage">70%</p></div>
                    <ProgressBar id = "progressBar2" height = "25px" progress = "70" showPercentage = "false" ></ProgressBar>
                    <div><p id = "language">REDUX </p> <p id = "percentage">60%</p></div>
                    <ProgressBar id = "progressBar2" height = "25px" progress = "60" showPercentage = "false" ></ProgressBar>
                    <div><p id = "language">JAVASCRIPT </p> <p id = "percentage">70%</p></div>
                    <ProgressBar id = "progressBar2" height = "25px" progress = "70" showPercentage = "false" ></ProgressBar>
                    <div><p id = "language">BRIGHTSCRIPT </p> <p id = "percentage">80%</p></div>
                    <ProgressBar id = "progressBar2" height = "25px" progress = "80" showPercentage = "false" ></ProgressBar>
                </div>
           </section>
       )     
    }
}

export default About