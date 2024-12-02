import React, { useEffect, useState } from "react";
//import { getDatabase, ref, onValue } from "firebase/database";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

function DashboardMap({ submissions }) {
    const START_LOCATION = [43.642556, -79.387083];

    return (
        <div style={{width: "100%", height: "100vh"}}>
            <MapContainer
                center={START_LOCATION}
                zoom={10}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {submissions.map((submission, index) => (
                    <Marker key={index} position={submission.location}>
                        <Popup>
                            <div>
                            <p>Time: {submission.time ? new Date(submission.time).toLocaleString() : "N/A"}</p>
                            <p>Behaviour(s): {submission.behaviour && Object.keys(submission.behaviour).length > 0
                                ? Object.values(submission.behaviour).join(", ")
                                : "None"}
                            </p>
                            <p>Condition(s): {submission.condition && Object.keys(submission.condition).length > 0
                                ? Object.values(submission.condition).join(", ")
                                : "None"} 
                            </p>
                            </div>
                        </Popup>
                    </Marker>
                ))} 
            </MapContainer>
        </div>
    );
}

export default DashboardMap;
