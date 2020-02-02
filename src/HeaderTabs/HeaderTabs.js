import React from 'react';
import {Component} from 'react';
import './HeaderTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class HeaderTabs extends Component {
    
    buttonClicked = () => {
        var unOrderList = document.getElementById("unOrderList")
        var list = document.getElementById("list")
        if (unOrderList.className === "unOrderList") {
            unOrderList.className += "Responsive";
            list.className += "Responsive";
        } else {
            unOrderList.className = "unOrderList";
            list.className = "list";
          }
    }
    render(){
       return(
           <div id = "customHeader">
                <div id = "header">
                    <a id = "name" href = "#home">VIGNESH ARULVEL</a>
                    <FontAwesomeIcon icon={faBars} id = "Header-icon" onClick = {this.buttonClicked}/>
                </div>
                <ul id = "unOrderList" className = "unOrderList">
                   <li id = "list" className = "list"><a id = "listAnchor" href = "#home">INTRO</a></li>
                   <li id = "list" className = "list"><a id = "listAnchor" href = "#subTitle">ABOUT</a></li>
                   <li id = "list" className = "list"><a id = "listAnchor" href = "#bottomAbout">MY WORK</a></li>
                   <li id = "list" className = "list"><a id = "listAnchor" href = "#bottomWork">CONTACT</a></li>
               </ul>
           </div>
       )     
    }
}

export default HeaderTabs