import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

function Location({ location, onChange, nextStep }) {
    const [markerPosition, setMarkerPosition] = useState([location.lat, location.lng]);

    function MapClickHandler() {
        useMapEvents({
            click(e) {
                const newPosition = [e.latlng.lat, e.latlng.lng];
                setMarkerPosition(newPosition);
                onChange('location', { lat: e.latlng.lat, lng: e.latlng.lng });
            },
        });
        return null;
    }

    return (
        <form>
            <h2>Where did you see the raccoon?</h2>
            <h3>Please pin the location below.</h3>

            <section role="application" style={{ height: '400px' }}>
                <MapContainer
                    center={markerPosition}
                    zoom={10}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}"
                        ext="png"
                    />
                    <Marker position={markerPosition} />
                    <MapClickHandler />
                </MapContainer>
            </section>
            
            <button type="button" onClick={nextStep}>Next</button>
        </form>
    );
}

export default Location;
