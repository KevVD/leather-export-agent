CBSoft
/
leather-export-agent

draft/boring-greider

LEATHERWARE XPORT (LXP) 🇳🇬 ✈️
Finished Goods Compliance & Export Pipeline Dashboard
A high-performance, resilient, and ultra-lightweight Next.js administrative dashboard built to manage and verify finished leather goods shipments exiting Nigeria to global destinations.

This portal provides automated compliance status tracking, batch verification pipelines, and instant exporter cargo profile inspections.

⚡ Architecture & Resiliency Engineering
To guarantee bulletproof operational uptime during live presentations and network-constrained environments, this dashboard was intentionally migrated away from high-latency cloud state layers to a Zero-JS Fail-Safe Architecture.

Native State Synchronization: Leverages the browser's raw HTML rendering engine (<input type="checkbox"> toggles and <details> disclosures) to compute analytics, change system metrics, and expand shipment documents instantly.
Immediate Feedback Loop: Bypasses virtual DOM re-render lag to drop forms-pending counts and recalculate the compliance acceptance rate completely on the client side.
📋 Data Schema Baseline
The application tracks a live registry of handcrafted premium leather cargo ready for clearance:

Batch ID	Exporter	Finished Product	Volume	Destination	Initial Status
LXP-2026-042	Ezenwa Handcrafted Luxury	Premium Full-Grain Men's Brogues	1,200 Pairs	United Kingdom	Pending Verification
LXP-2026-043	Alaba Artisanal Leatherwork	Top-Grain Leather Travel Duffle Bags	450 Units	United States	Approved
LXP-2026-044	Savannah Goods Co.	Minimalist Calfskin Wallets & Belts	3,000 Pcs	Germany	Pending Verification
🚀 Interactive Features
Tap-to-Toggle Compliance Auditing: Click the status control badges to instantly transition cargo between Pending Verification and Approved. Watch the top metric counters dynamically update on the fly.
Deep-Dive Cargo Profiling: Tap any Exporter's name to instantly expand an advanced administrative profile showing specific product specifications, carrier logistics/air waybill numbers, and customs HS code verification.
💻 Local Development & Verification
To run this workspace cleanly on your local machine:

# 1. Install standard dependencies
npm install

# 2. Fire up the local development server
npm run dev
