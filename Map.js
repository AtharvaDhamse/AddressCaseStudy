// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ profile }) => {
  const { latitude, longitude } = profile.address;

  return (
    <div className="map-container">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{profile.name}'s Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
