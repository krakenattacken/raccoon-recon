import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './submit-thanks.scss';

function SubmitThanks() {
    const [timeLeft, setTimeLeft] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft <= 0) {
            navigate("/");
        }
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    return (
        <div className="formContainer thanks">
            <h2>Thank you for contributing!</h2>
            <p>Returning home in <span>{timeLeft}</span> seconds...</p>
            <div className="buttonGroup">
                <Link to="/dashboard">
                        <button type="button">VIEW THE DASHBOARD</button>                
                </Link>
            </div>
        </div>
    )
}

export default SubmitThanks;