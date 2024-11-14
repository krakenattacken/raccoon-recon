import React from "react";

const Time = (props) => {
    const { dateTime, onDateTimeChanged, nextStep, prevStep } = props;

    const convertToDateTimeLocalString = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const handleDateTime = (e) => {
        e.preventDefault();
        const chosenDateTime = new Date(e.currentTarget.value);
        onDateTimeChanged(chosenDateTime);
    };

    return (
        <form>
            <label htmlFor="time">
                <h2>When did you see the raccoon?</h2>
            </label>
            <input
                id="time"
                type="datetime-local"
                onChange={handleDateTime}
                value={convertToDateTimeLocalString(dateTime)}
            />
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
        </form>
    );
};

export default Time;