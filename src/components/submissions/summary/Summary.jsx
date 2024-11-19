import React from "react";
import LocationFinal from "../location/LocationFinal";
import './summary.scss';

const Summary = ({ data, prevStep, onSubmit }) => {
    const formattedData = {
        behaviour: Object.keys(data.behaviour).filter((key) => data.behaviour[key]),
        condition: Object.keys(data.condition).filter((key) => data.condition[key]),
    };

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const formatting = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        return date.toLocaleString("en-US", formatting);
    }

    return (
        <div className="summary">
            <h2>Summary</h2>
            <LocationFinal
                location = {data.location}    
            />
            <p>
                <strong>Time of sighting:</strong> {formatDate(data.time)}
            </p>
            <p>
                <strong>Behaviour(s):</strong> {formattedData.behaviour.join(', ')}
            </p>
            <p>
                <strong>Condition(s):</strong> {formattedData.condition.join(', ')}
            </p>
            <div className="buttonGroup">
                <button role="button" onClick={prevStep}>Back</button>
                <button role="Submit" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Summary;