import React from "react";
import "../css/sidenav.css";
import ExampleLayout from "../Component/ExampleLayout"

class SideBar extends React.Component
{
    constructor(props){
        super(props)
    }

    openNav = (e) => {
        document.getElementById("mySidenav").style.width = "250px";
      }
    
      closeNav = (e) => {
        document.getElementById("mySidenav").style.width = "0";
      }
render(){
    return(

        <div>
            <div style={{ float: "left" }} id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="/lineChart"><img height="30px" width="30px" src="../assets/icon-graph-grow.png"/></a>
          

        </div>
        <span style={{ fontSize: "30px", cursor: "pointer",float:"left" }} onClick={this.openNav}>&#9776;</span>

        {/* <button data-toggle="modal" data-target="#exampleModal">modal</button> */}

        </div>
    )
}
}

export default SideBar;