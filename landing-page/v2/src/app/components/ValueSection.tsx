import { motion, useInView } from "motion/react";
import { useRef } from "react";

const differentiators = [
  {
    num: "01",
    title: "Works With Any Canva Account",
    desc: "Free, Pro, Teams, or Enterprise — REConnect works on every tier. No upgrade required.",
    gradient: "linear-gradient(135deg, #008ad0, #0a3b95)",
    accent: "#008ad0",
    icon: (
      // App store / layers icon
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" stroke="white" strokeWidth="1.6"/>
        <rect x="12.5" y="2" width="7.5" height="7.5" rx="1.5" stroke="white" strokeWidth="1.6"/>
        <rect x="2" y="12.5" width="7.5" height="7.5" rx="1.5" stroke="white" strokeWidth="1.6"/>
        <path d="M12.5 16.25h7.5M16.25 12.5v7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Real-Time MLS Data, Automatically",
    desc: "Live photos, property details, and agent info sync from your MLS the moment you open REConnect. No copy-pasting, ever.",
    gradient: "linear-gradient(135deg, #b14dff, #79309e)",
    accent: "#b14dff",
    icon: (
      // Sync / live pulse icon
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 11a9 9 0 109-9" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M2 5v6h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Drag-and-Drop, Not Just Autofill",
    desc: "Place any listing photo or data field exactly where you want it on any Canva design. Total creative control.",
    gradient: "linear-gradient(135deg, #10e0f9, #0a3b95)",
    accent: "#10e0f9",
    icon: (
      // Cursor / drag icon
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 3.5v13l4-4 2.5 5 2-1-2.5-5h5.5L5 3.5z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Auto-Generated Listing Websites",
    desc: "Every HGAR member gets one free Single Listing Website — with QR code, digital brochure, and optional vanity domain.",
    gradient: "linear-gradient(135deg, #ee6d68, #b14dff)",
    accent: "#ee6d68",
    icon: (
      // Globe / website icon
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="white" strokeWidth="1.6"/>
        <path d="M11 2.5C11 2.5 8 6.5 8 11s3 8.5 3 8.5M11 2.5c0 0 3 4 3 8.5s-3 8.5-3 8.5" stroke="white" strokeWidth="1.6"/>
        <path d="M2.5 11h17" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M4 7h14M4 15h14" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const upgrades = [
  {
    title: "Market Statistics",
    desc: "Organized by state, city, and zip — build market reports inside Canva.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 13V7M6 13V4M10 13V9M14 13V2" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Admin Seat",
    desc: "Access your full brokerage or office listing inventory, not just personal listings.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" stroke="white" strokeWidth="1.4"/>
        <path d="M2.5 13.5c0-3.04 2.46-5.5 5.5-5.5s5.5 2.46 5.5 5.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M11 2.5l1.5 1.5-1.5 1.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Vanity Domains",
    desc: "Add a custom domain to your listing website for a polished, professional URL.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 8a6 6 0 1112 0A6 6 0 012 8z" stroke="white" strokeWidth="1.4"/>
        <path d="M8 2c0 0-2 2.5-2 6s2 6 2 6M8 2c0 0 2 2.5 2 6s-2 6-2 6" stroke="white" strokeWidth="1.4"/>
        <path d="M2 8h12" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function ValueSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const upgradeRef = useRef(null);
  const upgradeInView = useInView(upgradeRef, { once: true, margin: "-40px" });

  return (
    <section className="py-16 md:py-28 px-6" style={{ background: "#0d1a3a" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex mb-4"
          >
            <span
              className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold border"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "rgba(16,224,249,0.8)",
                background: "rgba(16,224,249,0.07)",
                borderColor: "rgba(16,224,249,0.2)",
              }}
            >
              Why REConnect
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", color: "white", lineHeight: 1.15 }}
          >
            How REConnect is{" "}
            <span style={{ background: "linear-gradient(90deg, #10e0f9, #b14dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              different
            </span>
          </motion.h2>
        </div>

        {/* 2×2 bento grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }}>
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="relative flex flex-col gap-4 p-8"
              style={{ background: "#0d1a3a" }}
            >
              {/* Gradient left accent bar */}
              <div
                className="absolute left-0 top-8 bottom-8 w-0.5"
                style={{ background: item.gradient }}
              />

              {/* Number — same visual weight as the icon was */}
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: 36,
                  color: item.accent,
                  opacity: 0.6,
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>

              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "white", lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional upgrades */}
        <div ref={upgradeRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={upgradeInView ? { opacity: 1 } : {}}
            className="mb-5 uppercase tracking-widest font-bold text-xs"
            style={{ fontFamily: "Poppins, sans-serif", color: "rgba(255,255,255,0.3)" }}
          >
            Optional Upgrades Available
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {upgrades.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={upgradeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="p-5 flex flex-col gap-3"
                style={{ background: "#0d1a3a" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(10,59,149,0.5)", border: "1px solid rgba(10,59,149,0.4)" }}
                >
                  {u.icon}
                </div>
                <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{u.title}</h4>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
