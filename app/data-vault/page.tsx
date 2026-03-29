"use client";

import { useEffect, useState, useMemo } from "react";
import { Database, Download, Search, ChevronUp, ChevronDown } from "lucide-react";

// The DuckDB-WASM loading spinner was broken. We now read directly from the
// pre-processed JSON files (which are committed to the same public/ dir) for
// instant, zero-spinner data delivery.

interface ElectionRow {
  year: number | string;
  type: string;
  constituency: string;
  candidate: string;
  party: string;
  voteShare: string;
  position?: string | number;
}

type RawRow = Record<string, string | number | null | undefined>;

async function loadAllData(): Promise<ElectionRow[]> {
  const rows: ElectionRow[] = [];

  // --- Lok Sabha ---
  try {
    const ls = (await fetch("/data/processed/loksabha.json").then(r => r.json())) as RawRow[];
    ls.forEach((r) => {
      const candidateRaw = r["BJP/NDA Candidate Name"];
      const voteShareRaw = r["Vote Share %"];
      const candidate =
        typeof candidateRaw === "string"
          ? candidateRaw
          : candidateRaw == null
            ? ""
            : String(candidateRaw);
      const voteShare =
        typeof voteShareRaw === "string"
          ? voteShareRaw
          : voteShareRaw == null
            ? ""
            : String(voteShareRaw);
      // Skip rows where NDA didn't field a candidate (those are opposition winner context rows)
      if (!candidate.trim() && !voteShare) return;
      rows.push({
        year: r.Year ?? r.year,
        type: "Lok Sabha",
        constituency: r["Constituency Name"] ?? r.constituency ?? r.name ?? "—",
        candidate: candidate || "—",
        party: r["Party Label"] ?? r.party ?? "BJP",
        voteShare: voteShare !== "" && voteShare !== null ? `${voteShare}%` : "—",
        position: r.Position ?? r.position,
      });
    });
  } catch {}

  // --- Assembly ---
  try {
    const assembly = (await fetch("/data/processed/assembly.json").then(r => r.json())) as RawRow[];
    assembly.forEach((r) => {
      rows.push({
        year: r.Year ?? r.year,
        type: "Assembly",
        constituency: r["Constituency Name"] ?? r.constituency ?? r.name ?? "—",
        candidate: r["BJP/NDA Candidate Name"] ?? r.candidate ?? "—",
        party: r["Party Label"] ?? r.party ?? "BJP",
        voteShare: r["Vote Share %"] ?? r.voteShare ?? "—",
        position: r.Position ?? r.position,
      });
    });
  } catch {}

  // --- Corporations ---
  try {
    const corp = (await fetch("/data/processed/corporations_summary.json").then(r => r.json())) as RawRow[];
    corp.forEach((r) => {
      rows.push({
        year: r.Year ?? r.year,
        type: "Corporation",
        constituency: r.Corporation ?? r.name ?? "—",
        candidate: "—",
        party: "BJP/NDA",
        voteShare: r["NDA_Wards"] != null ? `${r["NDA_Wards"]} wards` : "—",
      });
    });
  } catch {}

  return rows.sort((a, b) => Number(b.year) - Number(a.year));
}

export default function DataVault() {
  const [data, setData] = useState<ElectionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    loadAllData().then((rows) => {
      setData(rows);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    let rows = data;
    if (typeFilter !== "All") rows = rows.filter((r) => r.type === typeFilter);
    if (search) {
      const q = search.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.constituency.toLowerCase().includes(q) ||
          r.candidate.toLowerCase().includes(q) ||
          String(r.year).includes(q)
      );
    }
    return sortAsc ? [...rows].reverse() : rows;
  }, [data, typeFilter, search, sortAsc]);

  const downloadCSV = () => {
    const header = ["Year", "Type", "Constituency", "Candidate", "Party", "Vote Share"];
    const body = filtered.map((r) => [r.year, r.type, r.constituency, r.candidate, r.party, r.voteShare]);
    const csv = [header, ...body].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kerala_bjp_election_data.csv";
    a.click();
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="w-full max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-bjp-saffron/20 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Database className="h-7 w-7 text-bjp-saffron" />
              <h1 className="text-3xl md:text-4xl font-heading text-white">The Data Vault</h1>
            </div>
            <p className="text-white/50">
              {loading ? "Loading..." : `${filtered.length} records across Lok Sabha, Assembly, and Local Body Elections`}
            </p>
          </div>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-bjp-saffron text-white rounded-lg hover:bg-bjp-saffrondark transition-colors text-sm font-semibold"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search constituency, candidate, year..."
              className="w-full bg-dark-800 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-bjp-saffron text-white text-sm placeholder:text-white/30"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="bg-dark-800 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-bjp-saffron appearance-none w-full md:w-48"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Election Types</option>
            <option value="Lok Sabha">Lok Sabha</option>
            <option value="Assembly">Assembly</option>
            <option value="Corporation">Corporation</option>
          </select>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="flex items-center gap-2 px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg text-white/70 text-sm hover:border-bjp-saffron/50 transition-colors"
          >
            {sortAsc ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            Year {sortAsc ? "Asc" : "Desc"}
          </button>
        </div>

        {/* Table */}
        <div className="bg-dark-800 rounded-xl border border-white/10 overflow-hidden">
          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center gap-4">
              <div className="h-10 w-10 border-2 border-bjp-saffron border-t-transparent rounded-full animate-spin" />
              <p className="text-white/40 text-sm">Loading election data...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-white/5 text-white/50 border-b border-white/10">
                  <tr>
                    <th className="px-4 py-3">Year</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Constituency / Body</th>
                    <th className="px-4 py-3">NDA Candidate</th>
                    <th className="px-4 py-3">Party</th>
                    <th className="px-4 py-3 text-right">Vote Share / Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filtered.slice(0, 200).map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-4 py-3 font-mono text-bjp-saffron font-semibold">{row.year}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          row.type === "Lok Sabha" ? "bg-purple-900/40 text-purple-300" :
                          row.type === "Assembly" ? "bg-blue-900/40 text-blue-300" :
                          "bg-bjp-green/10 text-bjp-green"
                        }`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white font-medium">{row.constituency}</td>
                      <td className="px-4 py-3 text-white/70">{row.candidate}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-bjp-saffron/15 text-bjp-saffron rounded text-xs">{row.party}</span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-white/80">
                        {typeof row.voteShare === "number" ? `${row.voteShare}%` : row.voteShare}
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-16 text-center text-white/30">
                        No records match your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {filtered.length > 200 && (
                <div className="p-4 text-center text-white/30 text-xs border-t border-white/5">
                  Showing 200 of {filtered.length} records. Use filters to narrow down.
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-white/25 italic pb-4">
          All data sourced from Election Commission of India &amp; Keralam State Election Commission.
        </p>
      </div>
    </main>
  );
}
