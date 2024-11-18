import React, { useEffect, useState } from "react";
import './time.scss'

const Time = ({ value, onChange}) => {
    const [timeRestriction, setTimeRestriction] = useState("");

    useEffect(() => {
        const now = new Date();
        const isoString = now.toISOString().slice(0, 16);
        setTimeRestriction(isoString)
    })
    
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    
    return (
        <div>
            <h2>When did you see the raccoon?</h2>
            <input
                type="datetime-local"
                value={value || ""}
                onChange={handleChange}
                max={timeRestriction}
            />
        </div>
    )

};

export default Time;