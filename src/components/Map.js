"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

export default function Map({ lat, lng, zoom, raggio }) {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      style={{ height: "300px", width: "100%" }}
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Circle
        center={[lat, lng]}
        radius={raggio}
        pathOptions={{ color: "#6082B6" }}
        fillOpacity={0.1}
      />
    </MapContainer>
  );
}