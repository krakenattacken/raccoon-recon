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
                <img className="heroImage" src="images/landing_hero.png"/>
            </section>
            <section className="sectionContainer about">
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
            <section className="sectionContainer">
                <div className="wrapper">
                    <h2 className="sectionTitle">Raccoon Behaviour (and protecting yourself)</h2>
                    <p>
                        Though urban raccoons do not usually approach humans and are relatively tame, with all wild animals it's best to exercise caution. Don't feed the raccoons, please.
                        The following information comes from the <a href="https://www.toronto.ca/community-people/animals-pets/wildlife-in-the-city/raccoons/" target="_blank" rel="noopener noreferrer"> City of Toronto's page on raccoons.</a>
                    </p>
                    <h3>Normal Behaviour</h3>
                    <ul>
                        <li>Nocturnal. You may see raccoons in the daytime during breeding season (January to mid-March) or if they have 
                            been scared out of a hiding spot.
                        </li>
                        <li>
                            Docile unless provoked. Raccoons would rather run away. Do not corner them.
                        </li>
                    </ul>
                    <h3>Rabies</h3>
                    <h3>Canine Distemper (CDV)</h3>
                    <ul>
                        <li>Canine distemper is a virus that is present in the raccoon population at low levels. As the name suggests,
                            dogs can also contract the virus if they are not vaccinated. Humans cannot be infected.
                        </li>
                        <li>Raccoons with distemper may approach people, or curl up to sleep in open areas in close proximity to people. 
                            They generally act disoriented or lethargic, but can become aggressive if cornered. They may have seizures.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="sectionContainer issue">
                <div className="wrapper">
                    <h2 className="sectionTitle">Got an issue?</h2>
                    <p>If it's a bug, report it on the <a href="https://www.github.com/krakenattacken/raccoon-recon/issues" target="_blank" rel="noopener noreferrer">Github page</a>.</p>
                    <p>If it's related to a real raccoon, please call 311 (or your local non-emergency service that handles wild animals) </p>
                    
                    <ul>
                        <li>
                            <a href="https://www.toronto.ca/home/311-toronto-at-your-service/submit-a-service-request-or-feedback/" target="_blank" rel="noopener noreferrer">Toronto 311 service requests</a>.
                        </li>
                        <li>
                            <a href="https://www.toronto.ca/home/311-toronto-at-your-service/submit-a-service-request-or-feedback/" target="_blank" rel="noopener noreferrer">Toronto 311 service requests</a>.
                        </li>
                        <li>
                            <a href="https://www.toronto.ca/home/311-toronto-at-your-service/submit-a-service-request-or-feedback/" target="_blank" rel="noopener noreferrer">Toronto 311 service requests</a>.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;