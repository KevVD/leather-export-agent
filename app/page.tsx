"use client";
import React, { useState } from "react";

const INITIAL_PRODUCTS = [
  {
    id: "LXP-2026-042",
    exporter: "Ezenwa Handcrafted Luxury",
    product: "Premium Full-Grain Men's Brogues",
    volume: "1,200 Pairs",
    destination: "United Kingdom (London)",
    status: "Pending Verification",
  },
  {
    id: "LXP-2026-043",
    exporter: "Alaba Artisanal Leatherwork",
    product: "Top-Grain Leather Travel Duffle Bags",
    volume: "450 Units",
    destination: "United States (Houston)",
    status: "Approved",
  },
  {
    id: "LXP-2026-044",
    exporter: "Savannah Goods Co.",
    product: "Minimalist Calfskin Wallets & Belts",
    volume: "3,000 Pcs",
    destination: "Germany (Frankfurt)",
    status: "Pending Verification",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  // Core feature: Tap a row to change status and recalculate metrics instantly
  const handleToggleStatus = (id: string) => {
    const updated = products.map((p: any) => {
      if (p.id === id) {
        return {
          ...p,
          status: p.status === "Approved" ? "Pending Verification" : "Approved",
        };
      }
      return p;
    });
    setProducts(updated);
  };

  // Live Counter Calculations
  const totalAudited = products.length;
  const pendingCount = products.filter(
    (p: any) => p.status === "Pending Verification"
  ).length;
  const approvedCount = products.filter(
    (p: any) => p.status === "Approved"
  ).length;
  const approvalRate = ((approvedCount / totalAudited) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-amber-500">
              LEATHERWARE XPORT
            </h1>
            <p className="text-xs text-zinc-500">
              Finished Goods Compliance Dashboard
            </p>
          </div>
          <div className="bg-zinc-900 px-3 py-1 rounded text-xs font-mono text-emerald-400">
            SYSTEM: ACTIVE
          </div>
        </div>

        {/* Analytics Counters */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <span className="text-xs text-zinc-500 block">Batches Audited</span>
            <span className="text-2xl font-bold font-mono text-amber-600">
              0{totalAudited}
            </span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <span className="text-xs text-zinc-500 block">Forms Pending</span>
            <span className="text-2xl font-bold font-mono text-zinc-300">
              0{pendingCount}
            </span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <span className="text-xs text-zinc-500 block">Acceptance Rate</span>
            <span className="text-2xl font-bold font-mono text-emerald-400">
              {approvalRate}%
            </span>
          </div>
        </div>

        {/* Pipeline Controls */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-zinc-300">
              Clearance Pipeline
            </h2>
            <div className="flex gap-2">
              {["All", "Pending Verification", "Approved"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-3 py-1 text-xs rounded transition-all ${
                    filter === s
                      ? "bg-amber-600 text-black font-medium"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-950 text-zinc-500 font-mono border-b border-zinc-800">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">EXPORTER</th>
                  <th className="p-3">FINISHED PRODUCT</th>
                  <th className="p-3">VOLUME</th>
                  <th className="p-3">DESTINATION</th>
                  <th className="p-3">STATUS (TAP ROW TO TOGGLE)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                {products
                  .filter((p: any) => filter === "All" || p.status === filter)
                  .map((item: any) => (
                    <tr
                      key={item.id}
                      onClick={() => handleToggleStatus(item.id)}
                      className="hover:bg-zinc-800/60 cursor-pointer transition-colors"
                    >
                      <td className="p-3 font-mono text-amber-500">
                        {item.id}
                      </td>
                      <td className="p-3 font-bold">{item.exporter}</td>
                      <td className="p-3 text-zinc-400">{item.product}</td>
                      <td className="p-3 font-mono text-zinc-300">
                        {item.volume}
                      </td>
                      <td className="p-3 text-zinc-400">{item.destination}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium transition-all ${
                            item.status === "Approved"
                              ? "text-emerald-400 bg-emerald-950/50 border border-emerald-900/30"
                              : "text-amber-500 bg-amber-950/40 border border-amber-900/20"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
