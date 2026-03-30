"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Feature, GeoJsonObject, Geometry } from "geojson";
import type { GeoJSON as LeafletGeoJSON, PathOptions } from "leaflet";

interface ActiveMapProps {
  highlight?: string;
  dots?: Array<{ lat: number; lng: number; count: number; label: string }>;
}

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
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);
  const geoJsonRef = useRef<LeafletGeoJSON | null>(null);

  useEffect(() => {
    fetch("/geojson/kerala_lsg_data.geojson")
      .then((res) => res.json())
      .then(setGeoData)
      .catch(console.error);
  }, []);

  const highlightedDistrict = highlight?.trim();

  const getStyle = useCallback((feature?: Feature<Geometry, { District?: string }>): PathOptions => {
    const dist = feature?.properties?.District?.trim() ?? "";
    const isHighlighted = highlightedDistrict && dist.toLowerCase() === highlightedDistrict.toLowerCase();
    return {
      color: isHighlighted ? "#FF9933" : "#A6897B",
      weight: isHighlighted ? 2.5 : 0.5,
      opacity: isHighlighted ? 1 : 0.3,
      fillColor: isHighlighted ? "#FF9933" : "#FFF5EB",
      fillOpacity: isHighlighted ? 0.6 : 0.2,
    };
  }, [highlightedDistrict]);

  useEffect(() => {
    if (geoJsonRef.current) {
      geoJsonRef.current.setStyle(getStyle);
    }
  }, [getStyle]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-bjp-saffron/20 shadow-2xl">
      <MapContainer
        center={[10.5, 76.3]}
        zoom={7}
        scrollWheelZoom={true}
        dragging={true}
        style={{ height: "100%", width: "100%", background: "#ffffff" }}
        zoomControl={false}
      >
        <ZoomControl position="topright" />

        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        />

        {geoData && (
          <GeoJSON
            ref={geoJsonRef}
            data={geoData}
            style={getStyle}
            onEachFeature={(feature: Feature<Geometry, { District?: string; name?: string; local_auth?: string }>, layer) => {
              const dist = feature?.properties?.District ?? "Unknown";
              const name = feature?.properties?.name ?? feature?.properties?.local_auth ?? "";
              layer.bindTooltip(
                `<div style="background:#ffffff;color:#1F140B;border:1px solid #FF9933;padding:6px 12px;border-radius:8px;font-size:12px;box-shadow:0 10px 20px rgba(0,0,0,0.1);">
                  <b style="color:#FF9933">${dist}</b><br/>${name}
                </div>`,
                { sticky: true, className: "leaflet-custom-tooltip", opacity: 1 }
              );
            }}
          />
        )}

        {dots.map((dot, idx) => (
          <CircleMarker
            key={`${dot.label}-${idx}`}
            center={[dot.lat, dot.lng]}
            radius={Math.max(8, Math.min(dot.count * 1, 28))}
            pathOptions={{
              color: "#ffffff",
              fillColor: "#FF9933",
              fillOpacity: 0.9,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <div style={{ fontFamily: "sans-serif", fontSize: 13, padding: "4px 8px" }}>
                <strong style={{ color: "#FF9933" }}>{dot.label}</strong>
                <br />
                <span style={{ color: "#1F140B", fontWeight: 700 }}>{dot.count} NDA Wins</span>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}

        {highlightedDistrict && dots.length === 0 && KERALA_DISTRICT_CENTROIDS[highlightedDistrict] && (
          <CircleMarker
            center={KERALA_DISTRICT_CENTROIDS[highlightedDistrict]}
            radius={16}
            pathOptions={{
              color: "#ffffff",
              fillColor: "#FF9933",
              fillOpacity: 1,
              weight: 3,
            }}
          >
            <Tooltip direction="top" offset={[0, -14]} opacity={1} permanent={false}>
              <span style={{ color: "#FF9933", fontWeight: 900, fontSize: 13 }}>{highlightedDistrict}</span>
            </Tooltip>
          </CircleMarker>
        )}
      </MapContainer>

      {/* Legend overlay */}
      {dots.length > 0 && (
        <div className="absolute bottom-6 left-6 z-[400] bg-white/90 backdrop-blur-md border border-bjp-saffron/30 rounded-xl px-4 py-3 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-4 h-4 rounded-full bg-bjp-saffron shadow-sm" />
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900">NDA Ward Wins</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-lg bg-bjp-saffron/25 border border-bjp-saffron/50 shadow-sm" />
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900">Active Context</span>
          </div>
        </div>
      )}
    </div>
  );
}
