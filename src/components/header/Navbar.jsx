import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";

import './navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOut = (e) => {
        if (
            navRef.current && !navRef.current.contains(e.target) &&
            menuButtonRef.current && !menuButtonRef.current.contains(e.target)
        ) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOut);
        } 
        else {
            document.removeEventListener("click", handleClickOut);     
        }
        return () => {
            document.removeEventListener("click", handleClickOut);
        }
    }, [isOpen]);

    return (
        <header className="navbar">
            <div className="navbarContent">
                <div>
                    <Link to="/" onClick={() => setIsOpen(false)} className="logo">RACCOON RECON</Link>
                </div>
                <button ref={menuButtonRef} className="hamburgerToggle" onClick={toggleMenu}>
                    <img src="/hamburger-menu.svg" alt="Menu"/>
                </button>
                <nav ref={navRef} className={`mainNav ${isOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/submissions" onClick={() => setIsOpen(false)}>Submit</Link>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                </nav>
            </div>
        </header>
        
    )
}

export default Navbar;