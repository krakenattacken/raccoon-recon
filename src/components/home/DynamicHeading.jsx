import React, { useState, useEffect } from "react";

const DynamicHeading = () => {
    const textOptions = ['a lot of', 'too many', 'more than 100,000'];
    const [currentText, setCurrentText] = useState(textOptions[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = textOptions.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % textOptions.length;
                return textOptions[nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return <h1>Toronto has <span>{currentText}</span> raccoons.</h1>;
};

export default DynamicHeading;