import { motion, useInView } from "motion/react";
import { useRef } from "react";
import svgPaths from "../../imports/LandingPageForReConnect-1/svg-ksfqunzq3t";

const benefits = [
  {
    title: "MLS Listing Data",
    desc: "Live photos, property details, and agent info pulled directly from the MLS in real time.",
    gradient: "linear-gradient(135deg, #008ad0, #0a3b95)",
    iconPaths: [
      { d: svgPaths.p277282a0 },
      { d: svgPaths.pe6cf300 },
      { d: svgPaths.p1f1cb600 },
    ],
  },
  {
    title: "Built-in Templates",
    desc: "Free templates included, plus your brokerage's own templates right in the app.",
    gradient: "linear-gradient(135deg, #b14dff, #79309e)",
    iconPaths: [
      { d: svgPaths.p25f82480 },
      { d: svgPaths.p299fef40 },
    ],
  },
  {
    title: "Drag & Drop in Canva",
    desc: "Place any listing data field or photo exactly where you want on any Canva design.",
    gradient: "linear-gradient(135deg, #10e0f9, #0a3b95)",
    iconPaths: [
      { d: svgPaths.pb275400 },
      { d: svgPaths.p1236ec80 },
    ],
  },
  {
    title: "Free Listing Website",
    desc: "Every member gets one free Single Listing Website for their most expensive active listing at launch.",
    gradient: "linear-gradient(135deg, #ee6d68, #b14dff)",
    iconPaths: [
      { d: svgPaths.p208db800 },
      { d: svgPaths.p28804cc0 },
    ],
  },
];

function BenefitIcon({ paths, gradient }: { paths: { d: string }[]; gradient: string }) {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
      style={{ background: gradient }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        {paths.map((p, i) => (
          <path key={i} d={p.d} stroke="white" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  );
}

export function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-16 md:py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span
            className="px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold border"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#0a3b95",
              background: "linear-gradient(171deg, rgba(10,59,149,0.08) 0%, rgba(177,77,255,0.08) 100%)",
              borderColor: "rgba(10,59,149,0.15)",
            }}
          >
            Your Member Benefits
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#11226a", lineHeight: 1.25 }}>
            What's included in your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0a3b95, #b14dff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REConnect membership
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#4b5563", lineHeight: 1.75 }}>
            We're thrilled to introduce <strong style={{ color: "#124266" }}>REConnect</strong>, a platform designed to simplify real estate marketing by connecting your MLS data wherever it needs to go, including directly into Canva.
          </p>
        </motion.div>

        {/* 2x2 staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(10,59,149,0.12)" }}
              className="flex gap-5 items-start p-5 md:p-7 rounded-2xl border transition-shadow"
              style={{
                background: "#f6f7fa",
                borderColor: "#e5e7eb",
              }}
            >
              <BenefitIcon paths={b.iconPaths} gradient={b.gradient} />
              <div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#1b2e41", marginBottom: 6 }}>
                  {b.title}
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
