import React, { useState } from "react";
import './checkbox-buttons.scss';

const CheckboxButtons = ({ groupName, options, selectedValues, onChange }) => {
    const [checkedItems, setCheckedItems] = useState(
        options.reduce((acc, [key, _]) => ({
            ...acc,
            [key]: selectedValues?.[key] || false,
        }), {})
    );

    const handleChange = (e) => {
        const { name, checked } = e.target;
        const updatedItems = { ...checkedItems, [name]: checked };
        setCheckedItems(updatedItems);
        onChange(updatedItems); // Returns keys (short descriptions)
    };

    return (
        <div>
            <h2>{groupName}</h2>
            <h3>Select at least one</h3>
            {options.map(([key, description]) => (
                <label key={key} className={`checkboxContainer ${checkedItems[key] ? "checked" : ""}`}>
                    <input
                        type="checkbox"
                        name={key}
                        checked={checkedItems[key]}
                        onChange={handleChange}
                        className="checkboxInput"
                    />
                    <span className="checkboxContent">{description}</span>
                </label>
            ))}
        </div>
    );
};

export default CheckboxButtons;
