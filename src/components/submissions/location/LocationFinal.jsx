import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

function LocationFinal({ location }) {
    return (
        <div>
            <section role="application" style={{ height: '400px', width: "100%"}}>
                <MapContainer
                    center={location}
                    zoom={16}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <Marker position={location} />
                </MapContainer>
            </section>
        </div>
    );
}

export default LocationFinal;
