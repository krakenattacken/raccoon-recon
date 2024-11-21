import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

function DashboardMap() {
    const location = [43.642556, -79.387083];

    return (
        <div style={{width: "100%", height: "100vh"}}>
            <MapContainer
                center={location}
                zoom={10}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
            </MapContainer>
        </div>
    );
}

export default DashboardMap;
