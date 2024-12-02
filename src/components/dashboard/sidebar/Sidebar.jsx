import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import './sidebar.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Sidebar({ filter, conditionFrequency, behaviourFrequency, timeFrequency }) {
    const [activeTab, setActiveTab] = useState("filters");
    const [behaviours, setBehaviours] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const behaviourOptions = ['aggressive', 'moving', 'foraging', 'resting'];
    const conditionOptions = ['healthy', 'sick', 'injured', 'dead'];

    const graphColour = "hsl(87, 59%, 72%)";
    const graphOptions = {
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        }
    };

    const handleFilterChange = () => {
        filter({ behaviours, conditions, startTime, endTime });
    };

    return (
        <div className="sidebar">
            <div>
                <button onClick={() => setActiveTab("filters")} className="tab-button">Filters</button>
                <button onClick={() => setActiveTab("data")} className="tab-button">Data</button>
            </div>
            {activeTab === "filters" && (
                <div className="filter-container">
                    <label>Showing sightings between:</label>
                    <input
                        type="datetime-local"
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        onChange={(e) => setEndTime(e.target.value)}
                    />

                    <p>Behaviours:</p>
                    {behaviourOptions.map((b) => (
                        <div key={b}>
                            <input
                                type="checkbox"
                                value={b}
                                checked={behaviours.includes(b)}
                                className="date-selector"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setBehaviours((prev) =>
                                        prev.includes(value)
                                            ? prev.filter((item) => item !== value)
                                            : [...prev, value]
                                    );
                                }}
                            />
                            <label>{b}</label>
                        </div>
                    ))}

                    <p>Conditions:</p>
                    {conditionOptions.map((c) => (
                        <div key={c}>
                            <input
                                type="checkbox"
                                value={c}
                                checked={conditions.includes(c)}
                                className="date-selector"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setConditions((prev) =>
                                        prev.includes(value)
                                            ? prev.filter((item) => item !== value)
                                            : [...prev, value]
                                    );
                                }}
                            />
                            <label>{c}</label>
                        </div>
                    ))}
                    <button onClick={handleFilterChange}>Apply Filters</button>
                </div>
            )}
            {activeTab === "data" && (
                <div className="graph-container">
                <h3>Condition Frequency</h3>
                <Bar 
                    data={{
                        labels: Object.keys(conditionFrequency),
                        datasets: [
                            {
                                label: "Condition Frequency",
                                data: Object.values(conditionFrequency),
                                backgroundColor: graphColour,
                            },
                        ],
                    }} 
                    options={graphOptions}
                />
                
                <h3>Behaviour Frequency</h3>
                <Bar 
                    data={{
                        labels: Object.keys(behaviourFrequency),
                        datasets: [
                            {
                                label: "Behaviour Frequency",
                                data: Object.values(behaviourFrequency),
                                backgroundColor: graphColour,
                            },
                        ],
                    }} 
                    options={graphOptions}
                />
                
                <h3>Submissions Over Time</h3>
                <Bar
                    data={{
                        labels: timeFrequency.map((item) => item.hour),
                        datasets: [
                            {
                                label: "Submissions",
                                data: timeFrequency.map((item) => item.count),
                                backgroundColor: graphColour,
                            },
                        ],
                    }}
                    options={graphOptions}
                />
            </div>
            )}
        </div>
    );
}

export default Sidebar;
