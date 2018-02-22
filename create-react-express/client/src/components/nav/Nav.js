import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./nav.css";

class Nav extends Component {
    render(){
        return(
<nav className="navbar navbar-light bg-danger static-top" style={{height: "110px"}}>
        <div className="container">
            <a href="home.html">
                <img src="img/pssLogo.png" height="100px" className="center"/>
            </a>
            <Link to="/home"> Home </Link>
            <Link to="/mealPlan"> Meal Plan </Link>
            <Link to="/favorites"> Favorites </Link>
            <Link to="/account"> My Account </Link>
        </div>
    
    </nav>
    )};
}

export default Nav;

