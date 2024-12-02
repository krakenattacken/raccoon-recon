import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import DashboardMap from "../dashboard-map/DashboardMap";
import Sidebar from "../sidebar/Sidebar";
import './dashboard.scss';
import { processFrequencyData } from "./dataProcessor";

function Dashboard() {
    const [submissions, setSubmissions] = useState([]);
    const [filteredSubmissions, setFilteredSubmissions] = useState([]);
    //for sidebar graphs
    const [conditionFrequency, setConditionFrequency] = useState({});
    const [behaviourFrequency, setBehaviourFrequency] = useState({});
    const [timeFrequency, setTimeFrequency] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const submissionsRef = ref(db, "submissions");

        onValue(submissionsRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const formattedData = Object.values(data);
                setSubmissions(formattedData);
                setFilteredSubmissions(formattedData); 

                const { conditionFrequency, behaviourFrequency, timeFrequency } = processFrequencyData(formattedData);
                setConditionFrequency(conditionFrequency);
                setBehaviourFrequency(behaviourFrequency);
                setTimeFrequency(timeFrequency);
            }
        });
    }, []);

    const handleFilter = (filterCriteria) => {
        const { behaviours, conditions, startTime, endTime } = filterCriteria;

        const filtered = submissions.filter((submission) => {
            const submissionTime = new Date(submission.time);

            //filtering currently broken. 
            // time filter 
            const matchesTime =
                (!startTime || submissionTime >= new Date(startTime)) &&
                (!endTime || submissionTime <= new Date(endTime));

            // behaviour filter 
            const matchesBehaviour =
                behaviours.length === 0 || 
                behaviours.some((b) => submission.behaviour && submission.behaviour[b]);

            // condition filter 
            const matchesCondition =
                conditions.length === 0 || 
                conditions.some((c) => submission.condition && submission.condition[c]);

            return matchesTime && matchesBehaviour && matchesCondition;
        });

        setFilteredSubmissions(filtered); 
        console.log(filtered);
    };

    return (
        <div className="dashboard">
            <Sidebar 
                filter={handleFilter}
                conditionFrequency={conditionFrequency}
                behaviourFrequency={behaviourFrequency}
                timeFrequency={timeFrequency} 
            />
            <DashboardMap submissions={filteredSubmissions} />
        </div>
    );
}

export default Dashboard;
