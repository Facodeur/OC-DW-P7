import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="nav-logo">
                        Groupomania
                    </Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                    <Link to="/create-post" className="nav-links">
                        Create-Post
                    </Link> 
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-login">
                        Login
                    </Link> 
                    </li>
                    <li className="nav-item">
                    <Link to="/signup" className="nav-signup">
                        Sign up
                    </Link> 
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
