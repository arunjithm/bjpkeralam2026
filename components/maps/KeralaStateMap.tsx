"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const LeafletMap = dynamic(
  () => import("@/components/maps/ActiveMap"),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-dark-800 rounded-2xl border border-white/10">
        <Loader2 className="h-8 w-8 text-bjp-saffron animate-spin mb-4" />
        <span className="text-white/50 text-sm">Loading Interactive Map...</span>
      </div>
    )
  }
);

interface KeralaStateMapProps {
  highlight?: string;
  dots?: Array<{ lat: number, lng: number, count: number, label: string }>;
}

export default function KeralaStateMap({ highlight, dots }: KeralaStateMapProps) {
  return <LeafletMap highlight={highlight} dots={dots} />;
}
