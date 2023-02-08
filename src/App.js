import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

import "./styles.css";

export default function App() {

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return false;
  }
  return (
    <div>
      <MapContainer
        className="markercluster-map"
        center={[51.0, 19.0]}
        zoom={4}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[49.8397, 24.0297]} />

        <MapEvents />
      </MapContainer>

      <input type="number" placeholder="Lat" />
      <input type="number" placeholder="Lng" />
      <button>Submit</button>
    </div>

  );
}
