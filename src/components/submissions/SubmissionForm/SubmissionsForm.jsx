import React, { useState } from 'react';
import Time from '../time/Time';
import CheckboxButtons from '../form-button/CheckboxButtons';
import Location from '../location/Location';
import Summary from '../summary/Summary';
import './submissions-form.scss';

const SubmissionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    time: null,
    location: null,
    behaviour: {},
    condition: {},
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    const formattedData = {
      ...formData,
      behaviour: Object.keys(formData.behaviour).filter((key) => formData.behaviour[key]),
      condition: Object.keys(formData.condition).filter((key) => formData.condition[key]),
    };
    console.log("Submitted", JSON.stringify(formattedData, null, 2));
  };

  const nextStep = () => {
    console.log("Moving to the next step");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    console.log("Going back to the previous step");
    setStep((prev) => prev - 1);
  };

  return (
    <div className="formContainer">
      {step === 1 && (
        <div className='submissionForm'>
          <h2>This is a submission form.</h2>
          {/* <Location
            value={formData.location}
            onChange={(value) => updateFormData("location", value)}
          />  */}
          <Time
            value={formData.time}
            onChange={(value) => updateFormData("time", value)}
          />
          <h3>Please select at least one option from each of the following sections</h3>
          <CheckboxButtons
            groupName="What was the raccoon's behaviour like?"
            options={[
              ["aggressive", "Aggressive (e.g., growling, hissing, showing teeth)"],
              ["playful", "Playful (e.g. running around)"],
              ["foraging", "Foraging (e.g. digging through trash, searching for food))"],
              ["resting", "Resting (e.g. sitting, lying down)"]
            ]}
            selectedValues={formData.behaviour}
            onChange={(value) => updateFormData("behaviour", value)}
          />
          <CheckboxButtons
            groupName="What condition was the raccoon in?"
            options={[
              ["healthy", "Healthy (good health with no visible issues)"],
              ["sick", "Sick/Ill (e.g. lethargy, unusual behavior)"],
              ["injured", "Had visible injuries or mobility issues"],
              ["dead", "Deceased or unresponsive"]
            ]}
            selectedValues={formData.condition}
            onChange={(value) => updateFormData("condition", value)}
          />
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}
      
      {step === 2 && (
        <div className="formContainer">
          <Summary
            data={formData}
            prevStep={prevStep}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default SubmissionForm;
