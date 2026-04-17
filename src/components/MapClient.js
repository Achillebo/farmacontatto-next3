"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapClient({
  lat,
  lng,
  zoom = 12,
  raggio = 1000,
}) {
  // FIX ICONE LEAFLET (OBBLIGATORIO PER VERCEL)
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

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
    </div>
  );
}