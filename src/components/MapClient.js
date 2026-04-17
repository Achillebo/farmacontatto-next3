"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// 🔥 import dinamico per evitare SSR crash
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);

export default function MapClient({ lat, lng, zoom = 12, raggio = 1000 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // fix resize leaflet
    window.dispatchEvent(new Event("resize"));
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
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
    </div>
  );
}