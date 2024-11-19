import React, { useState } from 'react';
import Time from '../time/Time';
import CheckboxButtons from '../checkbox-buttons/CheckboxButtons';
import LocationPicker from '../location/LocationPicker';
import Summary from '../summary/Summary';
import SubmitThanks from '../submit-thanks/SubmitThanks';
import './submissions-form.scss';

const SubmissionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    time: null,
    location: [43.642556, -79.387083], //cn tower as default.
    behaviour: {},
    condition: {},
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const [formErrors, setFormErrors] = useState('');
  
  const validateForm = () => {      
    if (!formData.location || !formData.time || 
      !Object.values(formData.behaviour).some(Boolean) || 
      !Object.values(formData.condition).some(Boolean)) 
    {  
      setFormErrors("You didn't complete the form!");
      return false;
    }
    setFormErrors('');
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formattedData = {
        ...formData,
        behaviour: Object.keys(formData.behaviour).filter((key) => formData.behaviour[key]),
        condition: Object.keys(formData.condition).filter((key) => formData.condition[key]),
      };
      console.log("Submitted", JSON.stringify(formattedData, null, 2));
      setStep(3);
    }
  };

  const nextStep = () => {
    if (validateForm()) {
      console.log("Moving to the next step");
      setStep((prev) => prev + 1);
    }
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
          <LocationPicker
            location={formData.location}
            onChange={(value) => updateFormData("location", value)}
          /> 
          <Time
            value={formData.time}
            onChange={(value) => updateFormData("time", value)}
          />
          <CheckboxButtons
            groupName="What was the raccoon's behaviour like?"
            options={[
              ["aggressive", "Aggressive (e.g., growling, hissing, showing teeth)"],
              ["playful", "Playful (e.g. running around)"],
              ["foraging", "Foraging (e.g. digging through trash, searching for food)"],
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
          <div className="buttonGroup">
            <button type="button" onClick={nextStep}>Next</button>
          </div>
          {formErrors && <p className='error'>{formErrors}</p>}
        </div>
      )}
      
      {step === 2 && (
        <div className="submissionForm">
          <Summary
            data={formData}
            prevStep={prevStep}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      {step === 3 && (
        <div className='submissionForm'>
          <SubmitThanks />
        </div>
      )}
    </div>
  );
};

export default SubmissionForm;
