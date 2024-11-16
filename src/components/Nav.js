import React from "react";
import { Link } from "react-router-dom"; 
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
    return (
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li> 
                <li><Link to="/menu">Menu</Link></li> 
                <li><Link to="/reservations">Reservations</Link></li> 
                <li><Link to="/order-online">Order Online</Link></li> 
                <li><Link to="/login">Login</Link></li> 
            </ul>
        </nav>
    );
}

export default Nav;
