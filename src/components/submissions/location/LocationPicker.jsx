import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

function LocationPicker({ location, onChange }) {
    const [markerPosition, setMarkerPosition] = useState([43.642556, -79.387083]); //cn tower

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat,lng } = e.latlng;
                setMarkerPosition([lat, lng]);
                if (onChange) {
                    onChange([lat, lng]);
                } 
            },
        });
        return null;
    };

    return (
        <div>
            <h2>Where did you see the raccoon?</h2>
            <h3>Please pin the location below.</h3>

            <section role="application" style={{ height: '400px', width: "100%"}}>
                <MapContainer
                    center={markerPosition}
                    zoom={11}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <MapClickHandler /> 
                    <Marker position={markerPosition} />
                </MapContainer>
            </section>
        </div>
    );
}

export default LocationPicker;
