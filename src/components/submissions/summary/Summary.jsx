import React from "react";

const Summary = ({ data, prevStep, onSubmit }) => {
    const formattedData = {
        behaviour: Object.keys(data.behaviour).filter((key) => data.behaviour[key]),
        condition: Object.keys(data.condition).filter((key) => data.condition[key]),
    };

    return (
        <div >
            <h2>Summary</h2>
            {/* <p>
                <strong>Location:</strong> {data.location.latitude.toString()},
                {submission.location.longitude.toString()}
            </p> */}
            <p>
                <strong>Time:</strong> {data.time}
            </p>
            <p>
                <strong>Behaviour:</strong> {formattedData.behaviour.join(', ')}
            </p>
            <p>
                <strong>Condition:</strong> {formattedData.condition.join(', ')}
            </p>
            <div className="buttonGroup">
                <button role="button" onClick={prevStep}>Back</button>
                <button role="Submit" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Summary;