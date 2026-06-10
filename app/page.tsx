"use client";
import React, { useState } from "react";

const INITIAL_PRODUCTS = [
  {
    id: "LXP-2026-042",
    exporter: "Ezenwa Handcrafted Luxury",
    product: "Premium Full-Grain Men's Brogues",
    batchSize: "1,200 Pairs",
    destination: "United Kingdom (London)",
    status: "Pending Verification",
    certs: "MANCAP / Origin Form A",
  },
  {
    id: "LXP-2026-043",
    exporter: "Alaba Artisanal Leatherwork",
    product: "Top-Grain Leather Travel Duffle Bags",
    batchSize: "450 Units",
    destination: "United States (Houston)",
    status: "Approved",
    certs: "NEPC / Standard Certified",
  },
  {
    id: "LXP-2026-044",
    exporter: "Savannah Goods Co.",
    product: "Minimalist Calfskin Wallets & Belts",
    batchSize: "3,000 Pcs",
    destination: "Germany (Frankfurt)",
    status: "Document Auditing",
    certs: "EUR.1 Movement Cert",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-amber-500">
              LEATHERWARE XPORT
            </h1>
            <p className="text-xs text-zinc-500">
              Finished Goods Compliance Dashboard
            </p>
          </div>
          <div className="bg-zinc-900 px-3 py-1 rounded text-xs font-mono text-emerald-400 border border-zinc-800">
            SYSTEM: ACTIVE
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
            <p className="text-xs text-zinc-500">Batches Audited</p>
            <p className="text-2xl font-bold text-amber-500 font-mono">03</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
            <p className="text-xs text-zinc-500">Forms Pending</p>
            <p className="text-2xl font-bold font-mono">01</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
            <p className="text-xs text-zinc-500">Acceptance Rate</p>
            <p className="text-2xl font-bold text-emerald-500 font-mono">
              99.1%
            </p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-sm font-semibold">Clearance Pipeline</h2>
            <div className="flex gap-2 bg-zinc-950 p-1 rounded border border-zinc-800">
              {["All", "Pending Verification", "Approved"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-2 py-1 text-xs rounded ${
                    filter === s
                      ? "bg-amber-600 text-black font-medium"
                      : "text-zinc-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="bg-zinc-950 text-xs text-zinc-500 uppercase tracking-wider font-mono">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Exporter</th>
                <th className="p-4">Finished Product</th>
                <th className="p-4">Volume</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {INITIAL_PRODUCTS.filter(
                (p) => filter === "All" || p.status === filter
              ).map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/30">
                  <td className="p-4 font-mono text-amber-500">{item.id}</td>
                  <td className="p-4 font-medium text-zinc-200">
                    {item.exporter}
                  </td>
                  <td className="p-4 text-xs">{item.product}</td>
                  <td className="p-4 text-xs font-mono">{item.batchSize}</td>
                  <td className="p-4 text-xs">{item.destination}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${
                        item.status === "Approved"
                          ? "bg-emerald-950 text-emerald-400"
                          : "bg-zinc-800 text-zinc-400"
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
  );
}
