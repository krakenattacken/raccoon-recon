import React from "react";

import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div>
                    <div className="logos">
                        <a aria-label="github" href="github.com/krakenattacken">
                            <img src="github.svg" alt="Github logo"/>
                        </a>
                    </div>
                    <p>&copy; Laurence Jang 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;