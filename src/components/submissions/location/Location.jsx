import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

function Location({ location, onChange }) {
    //const [markerPosition, setMarkerPosition] = useState([location.lat, location.lng]);

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
              const { lat, lng } = e.latlng;
              onChange([lat, lng]); 
            },
          });
          return location && location.lat && location.lng ? (
            <Marker position={[value.lat, value.lng]} />
          ) : null;
    };

    return (
        <div>
            <h2>Where did you see the raccoon?</h2>
            <h3>Please pin the location below.</h3>

            <section role="application" style={{ height: '400px' }}>
                <MapContainer
                    center={markerPosition || [43.65107, -79.347015]}
                    zoom={10}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    <MapClickHandler />
                </MapContainer>
            </section>
        </div>
    );
}

export default Location;
