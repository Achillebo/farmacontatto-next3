"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

export default function Map({ lat, lng, zoom = 13, raggio = 1000 }) {
  // Fix icone marker (compatibile Next.js + Vercel)
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
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Circle
        center={[lat, lng]}
        radius={raggio}
        pathOptions={{ color: "#6082B6" }}
        fillOpacity={0.15}
      />
    </MapContainer>
  );
}