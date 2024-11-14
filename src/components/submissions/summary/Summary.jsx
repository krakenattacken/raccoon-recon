import React from "react";

const Summary = ({ data, prevStep }) => {
    return (
        <div>
            <h2>Summary</h2>
            <p>
                <strong>Location:</strong> {submission.location.latitude.toString()},
                {submission.location.longitude.toString()}
            </p>
            <p>
                <strong>Behaviour:</strong> {submission.behaviours.join(', ')}
            </p>
            <p>
                <strong>Condition:</strong> {submission.conditions.join(', ')}
            </p>
            <p>
                <strong>Time:</strong> {new Date(submission.sightingTime.toDateString())}
            </p>
            <button role="button" onClick={prevStep}>Back</button>
            <button role="button" onClick={() => alert('Form submitted. Thanks!')}>Submit</button>
        </div>
    )
}

export default Summary;