"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import {
  Database,
  Download,
  Search,
  ChevronUp,
  ChevronDown,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

interface ElectionRow {
  Year: string;
  Election_Type: string;
  District: string;
  Constituency_or_Body: string;
  Ward_Name?: string;
  Candidate: string;
  Party: string;
  Votes: string;
  Vote_Share: string;
  Position?: string;
}

const TYPE_BADGE: Record<string, string> = {
  "Lok Sabha": "bg-purple-100 text-purple-700 border border-purple-200",
  "Assembly": "bg-blue-100 text-blue-700 border border-blue-200",
  "Corporation": "bg-emerald-100 text-emerald-700 border border-emerald-200",
  "Municipality": "bg-amber-100 text-amber-700 border border-amber-200",
  "Gram Panchayat": "bg-green-100 text-green-700 border border-green-200",
  "Block Panchayat": "bg-teal-100 text-teal-700 border border-teal-200",
  "District Panchayat": "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "By-Election": "bg-rose-100 text-rose-700 border border-rose-200",
};

const PAGE_SIZE = 50;

function MobileCard({ row }: { row: ElectionRow }) {
  return (
    <div className="bg-white border border-bjp-saffron/15 rounded-2xl p-4 space-y-2.5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-bjp-saffron font-bold text-base">{row.Year}</span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${TYPE_BADGE[row.Election_Type] ?? "bg-neutral-100 text-neutral-600"}`}>
          {row.Election_Type}
        </span>
      </div>

      <div>
        <p className="font-heading font-black text-ink-950 text-sm leading-tight">{row.Constituency_or_Body}</p>
        {row.Ward_Name && row.Ward_Name !== "—" && (
          <p className="text-[10px] text-neutral-500 font-medium mt-0.5">Ward: {row.Ward_Name}</p>
        )}
      </div>

      {row.Candidate !== "—" && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-ink-600 text-xs font-medium">{row.Candidate}</span>
          <span className="px-1.5 py-0.5 bg-bjp-saffron/15 text-bjp-saffron rounded text-[10px] font-bold">
            {row.Party}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
        <span className="text-xs text-ink-500 font-medium">Result / Share</span>
        <span className="font-mono font-bold text-ink-800 text-sm">
          {row.Votes}
          {row.Position && row.Position !== "—" && (
            <span className="ml-1.5 text-[10px] font-black text-ink-400">· Pos {row.Position}</span>
          )}
        </span>
      </div>
    </div>
  );
}

export default function DataVault() {
  const [data, setData] = useState<ElectionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/data/vault/kerala_elections.json");
        if (!res.ok) throw new Error("Failed to load vault data");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
        setError("Unable to load the Data Vault. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filtered = useMemo(() => {
    let rows = data;
    if (typeFilter !== "All") {
      rows = rows.filter((r) => r.Election_Type === typeFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      rows = rows.filter((r) => 
        r.Constituency_or_Body.toLowerCase().includes(q) ||
        r.Candidate.toLowerCase().includes(q) ||
        r.District.toLowerCase().includes(q) ||
        (r.Ward_Name && r.Ward_Name.toLowerCase().includes(q)) ||
        r.Year.includes(q)
      );
    }
    
    const sorted = [...rows].sort((a, b) => {
      const yearDiff = Number(b.Year) - Number(a.Year);
      if (yearDiff !== 0) return sortAsc ? -yearDiff : yearDiff;
      return a.Constituency_or_Body.localeCompare(b.Constituency_or_Body);
    });

    return sorted;
  }, [data, search, typeFilter, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [search, typeFilter, sortAsc]);

  const downloadCSV = useCallback(() => {
    const header = ["Year", "Type", "District", "Constituency/Body", "Ward", "Candidate", "Party", "Votes", "Position"];
    const csv = [
      header.map(h => `"${h}"`).join(","),
      ...filtered.map(r => [
        r.Year, r.Election_Type, r.District, r.Constituency_or_Body, r.Ward_Name || "—", r.Candidate, r.Party, r.Votes, r.Position || "—"
      ].map(v => `"${v}"`).join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kerala_election_data_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [filtered]);

  const FilterControls = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search records..."
          className="w-full border border-bjp-saffron/20 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-bjp-saffron text-neutral-900 text-sm bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <select
        className="border border-bjp-saffron/20 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:outline-none bg-white"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="All">All Election Types</option>
        {Object.keys(TYPE_BADGE).map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button
        onClick={() => setSortAsc(!sortAsc)}
        className="flex items-center gap-2 px-4 py-3 border border-bjp-saffron/20 rounded-xl text-neutral-700 text-sm bg-white"
      >
        {sortAsc ? <ChevronUp className="h-4 w-4 text-bjp-saffron" /> : <ChevronDown className="h-4 w-4 text-bjp-saffron" />}
        Year {sortAsc ? "Oldest First" : "Newest First"}
      </button>
    </div>
  );

  return (
    <main className="min-h-screen pt-20 pb-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-bjp-saffron/20 pb-6 pt-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-bjp-saffron/10 border border-bjp-saffron/20">
                <Database className="h-6 w-6 text-bjp-saffron" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-neutral-900">
                The Data Vault
              </h1>
            </div>
            <p className="text-sm text-neutral-500 pl-1">
              {loading
                ? "Indexing records..."
                : `${filtered.length.toLocaleString()} records matching filters`}
            </p>
          </div>
          <button
            onClick={downloadCSV}
            disabled={loading || filtered.length === 0}
            className="flex items-center gap-2 px-5 py-3 bg-bjp-saffron text-white rounded-xl hover:bg-bjp-saffrondark transition-colors text-sm font-bold disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>

        {error && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center gap-3 text-rose-700 text-sm">
            <AlertCircle className="h-5 w-5 shrink-0" />
            {error}
          </div>
        )}

        <div className="hidden md:flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search constituency, candidate, district..."
              className="w-full border border-bjp-saffron/20 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-bjp-saffron text-neutral-900 text-sm bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="border border-bjp-saffron/20 rounded-xl px-4 py-2.5 text-neutral-900 text-sm focus:outline-none w-56 bg-white"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Election Types</option>
            {Object.keys(TYPE_BADGE).map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="flex items-center gap-2 px-4 py-2.5 border border-bjp-saffron/20 rounded-xl text-neutral-700 text-sm bg-white min-w-[140px]"
          >
            {sortAsc ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            Year {sortAsc ? "Asc" : "Desc"}
          </button>
        </div>

        <div className="flex md:hidden gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-bjp-saffron/20 rounded-xl pl-10 pr-4 py-3 focus:outline-none text-neutral-900 text-sm bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            onClick={() => setFilterSheetOpen(true)}
            className="flex items-center gap-2 px-4 py-3 border border-bjp-saffron/20 rounded-xl bg-white"
          >
            <SlidersHorizontal className="h-4 w-4 text-bjp-saffron" />
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="h-10 w-10 border-2 border-bjp-saffron border-t-transparent rounded-full animate-spin" />
            <p className="text-neutral-400 text-sm">Warming up the vault...</p>
          </div>
        ) : (
          <>
            <div className="md:hidden space-y-3">
              {pageRows.length === 0 ? (
                <div className="py-16 text-center text-neutral-400 text-sm">No records found.</div>
              ) : (
                pageRows.map((row, i) => <MobileCard key={i} row={row} />)
              )}
            </div>

            <div className="hidden md:block rounded-2xl border border-bjp-saffron/20 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-neutral-50 text-neutral-500 border-b border-bjp-saffron/20">
                    <tr>
                      <th className="px-4 py-3 font-black">Year</th>
                      <th className="px-4 py-3 font-black">Type</th>
                      <th className="px-4 py-3 font-black">Constituency / Body</th>
                      <th className="px-4 py-3 font-black">Candidate</th>
                      <th className="px-4 py-3 font-black">Party</th>
                      <th className="px-4 py-3 text-right font-black">Result / Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {pageRows.map((row, i) => (
                      <tr key={i} className="hover:bg-neutral-50 transition-colors">
                        <td className="px-4 py-3 font-mono text-bjp-saffron font-semibold">{row.Year}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${TYPE_BADGE[row.Election_Type] ?? "bg-neutral-100 text-neutral-600"}`}>
                            {row.Election_Type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-neutral-900">{row.Constituency_or_Body}</div>
                          {row.Ward_Name && row.Ward_Name !== "—" && (
                            <div className="text-[10px] text-neutral-400">Ward: {row.Ward_Name}</div>
                          )}
                          <div className="text-[10px] text-neutral-400">{row.District} District</div>
                        </td>
                        <td className="px-4 py-3 text-neutral-600">{row.Candidate}</td>
                        <td className="px-4 py-3">
                          {row.Party !== "—" && (
                            <span className="px-2 py-0.5 bg-bjp-saffron/15 text-bjp-saffron rounded text-xs font-bold whitespace-nowrap">
                              {row.Party}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-neutral-800">
                          {row.Votes}
                          {row.Position && row.Position !== "—" && (
                            <span className="ml-1.5 text-[10px] font-black text-ink-400">· Pos {row.Position}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {pageRows.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-16 text-center text-neutral-300">No records found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {filtered.length > PAGE_SIZE && (
              <div className="flex items-center justify-between gap-4 pt-2">
                <span className="text-xs text-neutral-400 font-medium">
                  Showing {((page - 1) * PAGE_SIZE) + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length.toLocaleString()}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-bjp-saffron/20 text-neutral-600 hover:border-bjp-saffron disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let p = i + 1;
                      if (totalPages > 5 && page > 3) p = Math.min(page - 2 + i, totalPages - 4 + i);
                      return (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                            page === p ? "bg-bjp-saffron text-white shadow-md" : "border border-bjp-saffron/20 text-neutral-600"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-bjp-saffron/20 text-neutral-600 hover:border-bjp-saffron disabled:opacity-30"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {filterSheetOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => setFilterSheetOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-black text-lg">Filters</h3>
              <button onClick={() => setFilterSheetOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterControls />
            <button onClick={() => setFilterSheetOpen(false)} className="bg-bjp-saffron text-white w-full mt-5 py-3.5 font-black text-sm rounded-2xl">
              Apply Filters
            </button>
          </div>
        </>
      )}
    </main>
  );
}
