"use client";

import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function MapClient({ lat, lng, zoom, raggio }) {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}   // ❌ blocca zoom da mouse wheel
  doubleClickZoom={false}   // ❌ blocca zoom doppio click
  touchZoom={false}         // ❌ blocca zoom touch
  boxZoom={false}           // ❌ blocca zoom trascinamento box
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Circle
        center={[lat, lng]}
        radius={raggio}
        pathOptions={{
          color: "#6082B6",
          fillColor: "#6082B6",
          fillOpacity: 0.15,
          weight: 2,
        }}
      />
    </MapContainer>
  );
}