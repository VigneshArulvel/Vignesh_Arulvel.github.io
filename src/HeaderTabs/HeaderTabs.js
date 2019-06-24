import React from 'react';
import {Component} from 'react';
import './HeaderTabs.css';

class HeaderTabs extends Component {
    render(){
       return(
           <div id = "header">
               <a id = "name" href = "#home">Vignesh Arulvel</a>
               <ul id = "unOrderList">
                   
                   <li id = "list"><a id = "listAnchor" href = "#home">Intro</a></li>
                   <li id = "list"><a id = "listAnchor" href = "#about">About</a></li>
                   <li id = "list"><a id = "listAnchor" href = "#myWork">My work</a></li>
                   <li id = "list"><a id = "listAnchor" href = "#contact">Contact</a></li>
               </ul>
           </div>
       )     
    }
}

export default HeaderTabs