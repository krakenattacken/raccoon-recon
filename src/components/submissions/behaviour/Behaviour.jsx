import React from "react";
import FormButton from '../form-button/FormButton';

const Behaviour = ({ behaviours, onBehavioursChanged, nextStep, prevStep }) => {
    const handleClick = (e) => {
        const behaviourType = e.currentTarget.dataset.value;

        let newBehaviours;
        if (!behaviours.includes(behaviourType)) {
            newBehaviours = [...behaviours, behaviourType];
        } else {
            newBehaviours = behaviours.filter(behaviour => behaviour !== behaviourType);
        }
        onBehavioursChanged(newBehaviours); 
    };

    return (
        <form className="submissionBehaviour">
            <p>hello</p>
            <fieldset>
                <legend>
                    <h2>What was the raccoon's behaviour like?</h2>
                    <h3>Choose at least one</h3>
                    <FormButton
                        type="checkbox"
                        name="behaviour"
                        active={behaviours.includes('aggressive')}
                        value="aggressive"
                        onClick={handleClick}
                    >
                        <strong>Aggressive</strong> (eg. hissing, growling, showing teeth)
                    </FormButton>
                    <FormButton
                        type="checkbox"
                        name="behaviour"
                        active={behaviours.includes('foraging')}
                        value="foraging"
                        onClick={handleClick}
                    >
                        <strong>Foraging</strong> (eg. digging through trash, searching for food)
                    </FormButton>
                    <FormButton
                        type="checkbox"
                        name="behaviour"
                        active={behaviours.includes('resting')}
                        value="resting"
                        onClick={handleClick}
                    >
                        <strong>Resting</strong> (eg. sitting, lying down)
                    </FormButton>
                    <FormButton
                        type="checkbox"
                        name="behaviour"
                        active={behaviours.includes('playful')}
                        value="playful"
                        onClick={handleClick}
                    >
                        <strong>Playful</strong> (eg. running around)
                    </FormButton>
                </legend>
            </fieldset>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
        </form>
    )
}

export default Behaviour;