import React from "react";
import FormButton from '../form-button/FormButton';

const Condition = ({ conditions, onCondiitionChanged, nextStep, prevStep }) => {
    const handleClick = (e) => {
        const conditionType = e.currentTarget.dataset.value;

        let newConditions;
        if (!conditions.includes(conditionType)) {
            newConditions = [...conditions, conditionType];
        } else {
            newConditions = conditions.filter(condition => condition !== conditionType);
        }
        onCondiitionChanged(newConditions); 
    };

    return (
        <form className="submissionCondition">
            <fieldset>
                <legend>
                    <h2>What was the raccoon's condition?</h2>
                    <h3>Choose at least one</h3>
                    <FormButton
                        type="checkbox"
                        name="condition"
                        active={conditions.includes('healthy')}
                        value="healthy"
                        onClick={handleClick}
                    >
                        Raccoon looked <strong>healthy</strong>
                    </FormButton>
                    <FormButton
                        type="checkbox"
                        name="condition"
                        active={conditions.includes('sick')}
                        value="sick"
                        onClick={handleClick}
                    >
                        Raccoon looked <strong>sick</strong>
                    </FormButton>
                    <FormButton
                        type="checkbox"
                        name="condition"
                        active={conditions.includes('injured')}
                        value="injured"
                        onClick={handleClick}
                    >
                        Raccoon looked <strong>injured</strong>
                    </FormButton>
                    <FormButton
                        type="checkbox"
                        name="condition"
                        active={conditions.includes('dead')}
                        value="dead"
                        onClick={handleClick}
                    >
                        Raccoon was <strong>dead</strong>
                    </FormButton>
                </legend>
            </fieldset>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
        </form>
    )
}

export default Condition;