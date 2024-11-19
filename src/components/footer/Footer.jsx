import React from "react";

import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div>
                    <div className="logos">
                        <a aria-label="github" href="https://www.github.com/krakenattacken" target="_blank" rel="noopener noreferrer">
                            <img src="github.svg" alt="Github logo"/>
                        </a>
                    </div>
                    <p>&copy; Raccoon Recon 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;