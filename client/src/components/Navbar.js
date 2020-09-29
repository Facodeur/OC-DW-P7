import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="nav-logo">
                        Groupomania{" "}
                    </Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Home{" "}
                    </Link> 
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-links">
                        Login{" "}
                    </Link> 
                    </li>
                    <li className="nav-item">
                    <Link to="/signup" className="nav-links">
                        SignUp{" "}
                    </Link> 
                    </li>
                </ul>
            </nav>  
        </>
    )
}

export default Navbar
