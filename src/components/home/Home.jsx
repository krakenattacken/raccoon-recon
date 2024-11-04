import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        // Hero
        <section>
            <div>
                <h1>Toronto has a lot of raccoons</h1>
                <p>help find them!</p>
            </div>
            <div>
                <Link to="/submissions">
                    <button type="button">report a sighting</button>
                </Link>
                <Link to="/dashboard">
                    <button type="button">view the dashboard</button>                
                </Link>
            </div>
        </section>
    );
}

export default Home;