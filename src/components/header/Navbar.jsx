import React, { useState } from "react";
import { Link } from "react-router-dom";

import './navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className="header">
                <a href="/" className="nav-brand">Trash Panda TO</a>
            </div>
            <button className="hamburger" onClick={toggleMenu}></button>
            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/submit" onClick={() => setIsOpen(false)}>Submit</Link>
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
            </nav>
        </header>
        
    )
}

export default Navbar;