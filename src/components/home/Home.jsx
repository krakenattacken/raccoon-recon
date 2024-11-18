import React from "react";
import { Link } from "react-router-dom";
import DynamicHeading from "./DynamicHeading"; //works. but should it be used?
import './home.scss';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div>
                    <h1>Toronto has a lot of raccoons.</h1>
                    <p>help find them!</p>
                </div>
                <div className="buttonGroup"> 
                    <Link to="/submissions">
                        <button type="button">REPORT A SIGHTING</button>
                    </Link>
                    <Link to="/dashboard">
                        <button type="button">VIEW THE DASHBOARD</button>                
                    </Link>
                </div>
                <img className="heroImage" src="/images/landing_hero.png"/>
            </section>
            <section className="about">
                <div className="wrapper">
                    <h2 className="sectionTitle">About Raccoon Recon</h2>
                    <p>
                        Once upon a time, raccoons were rare enough in Toronto that a sighting warranted
                        a news article. But now, they're everywhere. And despite some... valiant efforts by the city,
                        they've won the war and will continue causing chaos. Forever.
                    </p>
                    <p>
                        Raccoon Recon is a simple web app that lets people report raccoon sightings and
                        builds a spatio-temporal record of where these furry fellows have been.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;