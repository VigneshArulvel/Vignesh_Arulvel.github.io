import React from 'react';
import {Component} from 'react';
import './MyWork.css';
import Project1Img from '../Assets/Cspire.png';
import Project2Img from '../Assets/DeviceTracker.png';
import Project3Img from '../Assets/Augury.png';
import Overlay from '../Overlay/Overlay';

class MyWork extends Component {
    constructor(props){
        super(props)
        this.state = {
            openOverlay : false
        }
    }
    openOverlay = (param) => {
        this.setState({
            openOverlay : true,
            type : param
        })
    }
    closeOverlay = () => {
        this.setState({openOverlay : false})
    }
    render(){
        const overlay = this.state.openOverlay ? <Overlay onCloseButtonClick = {this.closeOverlay} type = {this.state.type}/> : ""
        return(
           <div id = "myWork">
                <p id = "workTitle">My Work</p>
                <p id = "workDesc">I have worked on few amazing projects which I picked up for you.</p>
                <div id = "projectImages">
                    <div id = "work1">
                        <div id = "image1">
                            <img id = "project1" src = {Project1Img} alt = {Project1Img} onClick = {this.openOverlay}></img>
                            <div id = "overlay1" onClick = {() => this.openOverlay("mobitv")}>
                                <p id = "text3">MobiTV delivers live and on-demand video to any screen</p>
                            </div>
                        </div>
                    </div>
                    <div id = "work2">
                        <div id = "image2">
                            <img id = "project2" src = {Project2Img} alt = {Project2Img} onClick = {this.openOverlay}></img>
                            <div id = "overlay2" onClick = {() => this.openOverlay("devicetracker")}>
                                <p id = "text3">Its an device tracking app</p>
                            </div>
                        </div>
                    </div>
                    <div id = "work3">
                        <div id = "image3">
                            <img id = "project3" src = {Project3Img} alt = {Project3Img}></img>
                            <div id = "overlay3" onClick = {() => this.openOverlay("augury")}>
                                <p id = "text3">Take your prediction to next level</p>
                            </div>
                        </div>
                    </div>
                </div>
                {overlay}
           </div>
       )     
    }
}

export default MyWork