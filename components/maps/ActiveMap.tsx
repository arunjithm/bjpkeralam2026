"use client";

import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface ActiveMapProps {
  highlight?: string;
  dots?: Array<{ lat: number; lng: number; count: number; label: string }>;
}

// True Keralam district centroids for reliable dot placement
const KERALA_DISTRICT_CENTROIDS: Record<string, [number, number]> = {
  Thiruvananthapuram: [8.5241, 76.9366],
  Kollam: [8.8932, 76.6141],
  Pathanamthitta: [9.2640, 76.7873],
  Alappuzha: [9.4981, 76.3388],
  Kottayam: [9.5916, 76.5222],
  Idukki: [9.9189, 77.1025],
  Ernakulam: [10.0159, 76.3419],
  Thrissur: [10.5276, 76.2144],
  Palakkad: [10.7766, 76.6548],
  Malappuram: [11.0510, 76.0711],
  Kozhikode: [11.2588, 75.7804],
  Wayanad: [11.6854, 76.1320],
  Kannur: [11.8745, 75.3704],
  Kasaragod: [12.4996, 74.9869],
};

export default function ActiveMap({ highlight, dots = [] }: ActiveMapProps) {
  const [geoData, setGeoData] = useState<any>(null);
  const geoJsonRef = useRef<any>(null);

  useEffect(() => {
    fetch("/geojson/kerala_lsg_data.geojson")
      .then((res) => res.json())
      .then(setGeoData)
      .catch(console.error);
  }, []);

  const highlightedDistrict = highlight?.trim();

  const getStyle = (feature: any) => {
    const dist = feature?.properties?.District?.trim() ?? "";
    const isHighlighted = highlightedDistrict && dist.toLowerCase() === highlightedDistrict.toLowerCase();
    return {
      color: isHighlighted ? "#FF9933" : "#555555",
      weight: isHighlighted ? 2 : 0.4,
      opacity: 1,
      fillColor: isHighlighted ? "#FF9933" : "#1A1A1A",
      fillOpacity: isHighlighted ? 0.5 : 0.7,
    };
  };

  useEffect(() => {
    if (geoJsonRef.current) {
      geoJsonRef.current.setStyle(getStyle);
    }
  }, [highlight]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <MapContainer
        center={[10.5, 76.3]}
        zoom={7}
        scrollWheelZoom={true}
        dragging={true}
        style={{ height: "100%", width: "100%", background: "#111111" }}
        zoomControl={false}
      >
        <ZoomControl position="topright" />

        {/* CartoDB Dark Matter — completely free, no API key */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        />

        {geoData && (
          <GeoJSON
            ref={geoJsonRef}
            data={geoData}
            style={getStyle}
            onEachFeature={(feature, layer) => {
              const dist = feature?.properties?.District ?? "Unknown";
              const name = feature?.properties?.name ?? feature?.properties?.local_auth ?? "";
              layer.bindTooltip(
                `<div style="background:#1A1A1A;color:#fff;border:1px solid #FF9933;padding:4px 10px;border-radius:6px;font-size:12px;">
                  <b style="color:#FF9933">${dist}</b><br/>${name}
                </div>`,
                { sticky: true, className: "leaflet-custom-tooltip", opacity: 0.95 }
              );
            }}
          />
        )}

        {/* Orange Dots for NDA ward wins */}
        {dots.map((dot, idx) => (
          <CircleMarker
            key={`${dot.label}-${idx}`}
            center={[dot.lat, dot.lng]}
            radius={Math.max(6, Math.min(dot.count * 0.8, 24))}
            pathOptions={{
              color: "#FF9933",
              fillColor: "#FF9933",
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1}>
              <div style={{ fontFamily: "sans-serif", fontSize: 12, lineHeight: 1.4 }}>
                <strong style={{ color: "#FF9933" }}>{dot.label}</strong>
                <br />
                <span style={{ color: "#ccc" }}>{dot.count} NDA Wins</span>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}

        {/* If no custom dots, show district centroids for the highlighted district */}
        {highlightedDistrict && dots.length === 0 && KERALA_DISTRICT_CENTROIDS[highlightedDistrict] && (
          <CircleMarker
            center={KERALA_DISTRICT_CENTROIDS[highlightedDistrict]}
            radius={14}
            pathOptions={{
              color: "#FF9933",
              fillColor: "#FF9933",
              fillOpacity: 0.9,
              weight: 3,
            }}
          >
            <Tooltip direction="top" offset={[0, -12]} opacity={1} permanent={false}>
              <span style={{ color: "#FF9933", fontWeight: "bold", fontSize: 12 }}>{highlightedDistrict}</span>
            </Tooltip>
          </CircleMarker>
        )}
      </MapContainer>

      {/* Legend overlay */}
      {dots.length > 0 && (
        <div className="absolute bottom-4 left-4 z-[400] bg-dark-900/90 backdrop-blur-sm border border-bjp-saffron/30 rounded-lg px-3 py-2 text-xs text-white/70">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 rounded-full bg-bjp-saffron flex-shrink-0" />
            <span>NDA ward wins (size = count)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-bjp-saffron/25 border border-bjp-saffron/50 flex-shrink-0" />
            <span>Highlighted district</span>
          </div>
        </div>
      )}
    </div>
  );
}
