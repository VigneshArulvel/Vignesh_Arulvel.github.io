import React from 'react';
import {Component} from 'react';
import './Overlay.css';
import overlayText from './OverlayText.js'
import crossImage from '../Assets/cross.png';

class Overlay extends Component {
    closeOverlay = () => {
        this.props.onCloseButtonClick(true)
    }
    render(){
        let type = this.props.type
        let data = ''
        if (type === "mobitv"){
            data = overlayText.mobiTV
        }
        else if (type === "devicetracker"){
            data = overlayText.deviceTracker
        }
        else{   
            data = overlayText.augury    
        }
        return(
           <div id  = "container">
                <div id = "overlayContent"> 
                    <div id = "imageOverlay">
                        <img id = "crossImageOverlay" src = {crossImage} alt = {crossImage} onClick = {this.closeOverlay} ></img>
                        <img id  =  "projectImage" src = {data.image} alt = {data.image}></img>
                    </div>
                    <div id = "overlayText">
                        <div id = "overlayTitle">{data.title}</div>
                        <div id = "overlayDesc">{data.text}</div>
                    </div>
                </div>
           </div>
       )     
    }
}

export default Overlay