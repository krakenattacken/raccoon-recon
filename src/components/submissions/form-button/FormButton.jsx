import React from "react";

function FormButton({ type, children, value, active, name, onClick }) {
    return (
        <div>
            {type === 'checkbox' && (
                <input
                    type="checkbox"
                    data-value={value}
                    onChange={onClick}
                    value={value}
                    checked={active}
                    id={`${name}_${value}`}
                />
            )}
            <label htmlFor={`${name}_${value}`}>
                <div className="formButton">
                    {children}
                </div>
            </label>
        </div>
    );
}

export default FormButton;
