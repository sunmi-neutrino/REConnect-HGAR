import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgListing from "../../imports/LandingPageForReConnect-1/a1a80d776408402e1bf50eabd3d3e40c18d31f71.png";

const features = [
  {
    title: "Auto-Generated, No Setup Required",
    desc: "Your most expensive active listing automatically gets its own property website, populated entirely from MLS data at launch.",
    icon: (
      // Wand / auto-generate
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9 2l1 2.5L12.5 5l-2.5 1L9 8.5 8 6 5.5 5 8 4 9 2z" stroke="white" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M3 9l9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 9l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "QR Code & Digital Brochure",
    desc: "Each listing website ships with a scannable QR code and a shareable digital brochure — print it or send it instantly.",
    icon: (
      // QR code icon
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="5" height="5" rx="0.5" stroke="white" strokeWidth="1.3"/>
        <rect x="9.5" y="1.5" width="5" height="5" rx="0.5" stroke="white" strokeWidth="1.3"/>
        <rect x="1.5" y="9.5" width="5" height="5" rx="0.5" stroke="white" strokeWidth="1.3"/>
        <rect x="3" y="3" width="2" height="2" fill="white"/>
        <rect x="11" y="3" width="2" height="2" fill="white"/>
        <rect x="3" y="11" width="2" height="2" fill="white"/>
        <path d="M9.5 9.5h2v2h-2zM13.5 9.5v2M11.5 11.5h2v2M9.5 13.5h2" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Optional Vanity Domain",
    desc: "Upgrade with a custom domain for a polished, professional URL unique to your listing.",
    icon: (
      // Globe / domain
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.3"/>
        <path d="M8 2c0 0-2 2 -2 6s2 6 2 6M8 2c0 0 2 2 2 6s-2 6-2 6" stroke="white" strokeWidth="1.3"/>
        <path d="M2 8h12" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M3 5.5h10M3 10.5h10" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function PropertySection() {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section ref={ref} className="py-16 md:py-28 px-6 overflow-hidden" style={{ background: "#f6f7fa" }}>
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — image ── */}
          <div className="relative order-1 flex items-center justify-center">
            <motion.div style={{ y: imgY }} className="relative w-full max-w-md">

              <img
                src={imgListing}
                alt="REConnect single listing website on desktop and mobile"
                className="relative w-full object-cover"
                style={{ zIndex: 1 }}
              />

              {/* FREE badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 280 }}
                className="absolute -top-5 -right-5 w-16 h-16 rounded-full flex flex-col items-center justify-center text-white text-xs font-bold"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(135deg, #ee6d68, #b14dff)",
                  border: "2.5px solid #f6f7fa",
                  boxShadow: "0 8px 24px rgba(177,77,255,0.35)",
                  lineHeight: 1.3,
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <span>FREE</span>
                <span style={{ fontWeight: 400 }}>for</span>
                <span>HGAR</span>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT — content ── */}
          <div className="order-2" ref={contentRef}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              className="flex mb-4"
            >
              <span
                className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold border"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#0a3b95",
                  background: "rgba(10,59,149,0.06)",
                  borderColor: "rgba(10,59,149,0.18)",
                }}
              >
                Property Websites
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 38px)",
                color: "#11226a",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Activate Your{" "}
              <span style={{ background: "linear-gradient(90deg, #0a3b95, #10e0f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Property Website
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.14 }}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, color: "#4b5563", lineHeight: 1.75, marginBottom: 28 }}
            >
              Every HGAR member gets <strong style={{ color: "#0a3b95" }}>one free Single Listing Website</strong> auto-populated with live MLS data for their most expensive active listing.
            </motion.p>

            {/* Feature list */}
            <div className="flex flex-col gap-5 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.18 + i * 0.09 }}
                  className="flex gap-4 items-start"
                >
                  {/* Icon box */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, #0a3b95, #008ad0)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#1b2e41", marginBottom: 3 }}>{f.title}</p>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA — pill gradient, matches site style */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.44 }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 28px rgba(10,59,149,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 15,
                background: "linear-gradient(167deg, #008ad0 0%, #0a3b95 100%)",
                boxShadow: "0 8px 24px rgba(10,59,149,0.35)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2h4v4M14 2L8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Activate Your Property Website
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
