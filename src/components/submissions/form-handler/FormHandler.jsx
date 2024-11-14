import React from "react";
import Location from "../location/Location";
import Behaviour from "../behaviour/Behaviour";
import Condition from "../condition/Condition";
import Time from "../time/Time";
import Summary from "../summary/Summary";

const FormHandler = () => {
    const [formData, setFormData] = useState({
        location: { lat: 43.7, lng: -79.4 }, // Default coordinates for Toronto
        behaviours: [],
        conditions: [],
        time: '',
    });

    const [step, setStep] = useState(1);

    // Handle input change in a central place
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Navigation functions
    const nextStep = () => setStep(prevStep => prevStep + 1);
    const prevStep = () => setStep(prevStep => prevStep - 1);

    // Render the current step
    const renderStep = () => {
        switch (step) {
        case 1:
            return (
            <Location 
                location={formData.location} 
                onChange={(field, value) => handleInputChange('location', value)} 
                nextStep={nextStep} 
            />
            );
        case 2:
            return (
            <Behaviour 
                behaviours={formData.behaviours} 
                onBehavioursChanged={(newBehaviours) => handleInputChange('behaviours', newBehaviours)} 
                nextStep={nextStep} 
                prevStep={prevStep} 
            />
            );
        case 3:
            return (
            <Condition 
                conditions={formData.condition} 
                onConditionsChanged={(newConditions) => handleInputChange('conditions', newConditions)} 
                nextStep={nextStep} 
                prevStep={prevStep} 
            />
            );
        case 4:
            return (
            <Time 
                dateTime={formData.time} 
                onChange={handleInputChange} 
                nextStep={nextStep} 
                prevStep={prevStep} 
            />
            );
        case 5:
            return <Summary data={formData} prevStep={prevStep} />;
        default:
            return null;
        }
    };

    return (
        <div>
        {renderStep()}
        </div>
    );
    };

    export default FormHandler;
