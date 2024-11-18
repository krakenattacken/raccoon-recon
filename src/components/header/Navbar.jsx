import React, { useState } from "react";
import { Link } from "react-router-dom";

import './navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="navbar">
            <div className="navbarContent">
                <div>
                    <Link to="/" onClick={() => setIsOpen(false)} className="logo">RACCOON RECON</Link>
                </div>
                <button className="hamburgerToggle" onClick={toggleMenu}>
                    <img src="/hamburger-menu.svg" alt="Menu"/>
                </button>
                <nav className={`mainNav ${isOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/submissions" onClick={() => setIsOpen(false)}>Submit</Link>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                </nav>
            </div>
        </header>
        
    )
}

export default Navbar;