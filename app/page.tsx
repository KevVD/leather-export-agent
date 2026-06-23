"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 font-sans">
      {/* NATIVE BROWSER ENGINE: Handles calculations and badges instantly */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hidden-trigger { position: absolute; opacity: 0; width: 1px; height: 1px; }
        
        /* Default Counter States */
        .total-counter::after { content: "03"; }
        .pending-counter::after { content: "02"; }
        .rate-counter::after { content: "33.3%"; }
        
        /* Native Live Calculations */
        #row1:checked ~ div .pending-counter::after { content: "01" !important; }
        #row1:checked ~ div .rate-counter::after { content: "66.7%" !important; }
        
        #row3:checked ~ div .pending-counter::after { content: "01" !important; }
        #row3:checked ~ div .rate-counter::after { content: "66.7%" !important; }

        #row1:checked ~ #row3:checked ~ div .pending-counter::after { content: "00" !important; }
        #row1:checked ~ #row3:checked ~ div .rate-counter::after { content: "100.0%" !important; }

        /* Status Badge State Swapping */
        .badge-1::after { content: "Pending Verification"; color: #f59e0b; background-color: rgba(120,53,4,0.4); border: 1px solid rgba(146,64,14,0.2); }
        #row1:checked ~ div .badge-1::after { content: "Approved" !important; color: #34d399 !important; background-color: rgba(6,78,59,0.5) !important; border: 1px solid rgba(6,95,70,0.3) !important; }

        .badge-3::after { content: "Pending Verification"; color: #f59e0b; background-color: rgba(120,53,4,0.4); border: 1px solid rgba(146,64,14,0.2); }
        #row3:checked ~ div .badge-3::after { content: "Approved" !important; color: #34d399 !important; background-color: rgba(6,78,59,0.5) !important; border: 1px solid rgba(6,95,70,0.3) !important; }

        /* Clean up standard HTML details marker arrow */
        details summary::-webkit-details-marker { display: none; }
        details summary { list-style: none; }
      `,
        }}
      />

      {/* State Hooks for the Browser */}
      <input type="checkbox" id="row1" className="hidden-trigger" />
      <input type="checkbox" id="row3" className="hidden-trigger" />

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

        {/* Analytics Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <span className="text-xs text-zinc-500 block">Batches Audited</span>
            <span className="total-counter text-2xl font-bold font-mono text-amber-600"></span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <span className="text-xs text-zinc-500 block">Forms Pending</span>
            <span className="pending-counter text-2xl font-bold font-mono text-zinc-300"></span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <span className="text-xs text-zinc-500 block">Acceptance Rate</span>
            <span className="rate-counter text-2xl font-bold font-mono text-emerald-400"></span>
          </div>
        </div>

        {/* Pipeline Container */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
            <h2 className="text-sm font-semibold text-zinc-300">
              Compliance Registry
            </h2>
            <span className="text-[10px] text-zinc-500 font-mono">
              TAP EXPORTER NAME TO EXPAND PROFILE
            </span>
          </div>

          <div className="space-y-2">
            {/* Header Labels */}
            <div className="grid grid-cols-6 text-[10px] font-mono text-zinc-500 px-3 uppercase">
              <div>ID</div>
              <div className="col-span-2">Exporter / Shipment Info</div>
              <div>Volume</div>
              <div>Destination</div>
              <div className="text-right">Action</div>
            </div>

            {/* ROW 1 MODULE: EZENWA */}
            <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-lg p-1">
              <details className="group">
                <summary className="grid grid-cols-6 items-center text-xs p-2 cursor-pointer hover:bg-zinc-800/30 rounded transition-colors">
                  <div className="font-mono text-amber-500">LXP-2026-042</div>
                  <div className="col-span-2 font-bold text-zinc-200 group-open:text-amber-500 transition-colors">
                    🏢 Ezenwa Handcrafted Luxury{" "}
                    <span className="text-[10px] text-zinc-500 font-normal block font-sans">
                      Click to inspect profile
                    </span>
                  </div>
                  <div className="font-mono text-zinc-400">1,200 Pairs</div>
                  <div className="text-zinc-400">United Kingdom</div>
                  <div className="text-right">
                    <label
                      htmlFor="row1"
                      className="inline-block px-3 py-1 text-[10px] font-mono font-medium rounded cursor-pointer select-none badge-1"
                    ></label>
                  </div>
                </summary>

                {/* Embedded Profile (Revealed Natively) */}
                <div className="p-4 mx-2 mb-2 bg-zinc-900 border border-zinc-800 rounded-md grid grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      PRODUCT SPECIFICATION
                    </span>
                    <p className="font-semibold text-zinc-300">
                      Premium Full-Grain Men's Brogues
                    </p>
                    <p className="text-zinc-500 text-[11px]">
                      Vegetable-tanned Nigerian Hides
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      LOGISTICS DETAILS
                    </span>
                    <p className="text-zinc-300">
                      Carrier: DHL Global Forwarding
                    </p>
                    <p className="text-zinc-400 font-mono text-[11px]">
                      AWB: #884-9021-421
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      COMPLIANCE ASSURANCE
                    </span>
                    <p className="text-emerald-400 flex items-center gap-1">
                      ✓ Tannery Source Verified
                    </p>
                    <p className="text-zinc-400 text-[11px]">
                      Customs Code: HS 6403.51
                    </p>
                  </div>
                </div>
              </details>
            </div>

            {/* ROW 2 MODULE: ALABA (STATIC) */}
            <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-lg p-1">
              <details className="group">
                <summary className="grid grid-cols-6 items-center text-xs p-2 cursor-pointer hover:bg-zinc-800/30 rounded transition-colors">
                  <div className="font-mono text-amber-500">LXP-2026-043</div>
                  <div className="col-span-2 font-bold text-zinc-200 group-open:text-amber-500 transition-colors">
                    🏢 Aba Industrial Cluster{" "}
                    <span className="text-[10px] text-zinc-500 font-normal block font-sans">
                      Click to inspect profile
                    </span>
                  </div>
                  <div className="font-mono text-zinc-400">450 Units</div>
                  <div className="text-zinc-400">United States</div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-[10px] font-mono font-medium rounded text-emerald-400 bg-emerald-950/50 border border-emerald-900/30">
                      Approved
                    </span>
                  </div>
                </summary>

                <div className="p-4 mx-2 mb-2 bg-zinc-900 border border-zinc-800 rounded-md grid grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      PRODUCT SPECIFICATION
                    </span>
                    <p className="font-semibold text-zinc-300">
                      Top-Grain Leather Travel Duffle Bags
                    </p>
                    <p className="text-zinc-500 text-[11px]">
                      Chrome-free processing, heavy duty
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      LOGISTICS DETAILS
                    </span>
                    <p className="text-zinc-300">
                      Carrier: Maersk Line Ocean Freight
                    </p>
                    <p className="text-zinc-400 font-mono text-[11px]">
                      Container: MSK-902-11
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      COMPLIANCE ASSURANCE
                    </span>
                    <p className="text-emerald-400 flex items-center gap-1">
                      ✓ NEPC Certified Agent
                    </p>
                    <p className="text-zinc-400 text-[11px]">
                      Customs Code: HS 4202.12
                    </p>
                  </div>
                </div>
              </details>
            </div>

            {/* ROW 3 MODULE: SAVANNAH */}
            <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-lg p-1">
              <details className="group">
                <summary className="grid grid-cols-6 items-center text-xs p-2 cursor-pointer hover:bg-zinc-800/30 rounded transition-colors">
                  <div className="font-mono text-amber-500">LXP-2026-044</div>
                  <div className="col-span-2 font-bold text-zinc-200 group-open:text-amber-500 transition-colors">
                    🏢 Savannah Goods Co.{" "}
                    <span className="text-[10px] text-zinc-500 font-normal block font-sans">
                      Click to inspect profile
                    </span>
                  </div>
                  <div className="font-mono text-zinc-400">3,000 Pcs</div>
                  <div className="text-zinc-400">Germany</div>
                  <div className="text-right">
                    <label
                      htmlFor="row3"
                      className="inline-block px-3 py-1 text-[10px] font-mono font-medium rounded cursor-pointer select-none badge-3"
                    ></label>
                  </div>
                </summary>

                <div className="p-4 mx-2 mb-2 bg-zinc-900 border border-zinc-800 rounded-md grid grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      PRODUCT SPECIFICATION
                    </span>
                    <p className="font-semibold text-zinc-300">
                      Minimalist Calfskin Wallets & Belts
                    </p>
                    <p className="text-zinc-500 text-[11px]">
                      Premium aniline finishing process
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      LOGISTICS DETAILS
                    </span>
                    <p className="text-zinc-300">Carrier: Lufthansa Cargo</p>
                    <p className="text-zinc-400 font-mono text-[11px]">
                      Flight: LH-563 / Manifest #44
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      COMPLIANCE ASSURANCE
                    </span>
                    <p className="text-emerald-400 flex items-center gap-1">
                      ✓ Euro-1 Movement Certificate
                    </p>
                    <p className="text-zinc-400 text-[11px]">
                      Customs Code: HS 4203.30
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
