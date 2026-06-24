import { motion, useInView } from "motion/react";
import { useRef } from "react";

const isItems = [
  "A Canva app — works inside Free, Pro, Teams & Enterprise accounts",
  "Real-time MLS data pulled automatically — no copy-pasting",
  "Drag-and-drop listing photos & data onto any Canva design",
  "Auto-generated Single Listing Websites with QR codes",
];

const isNotItems = [
  "Not a standalone design tool — it works within Canva's interface",
  "Not a social media scheduler — use Canva's built-in scheduler",
  "Not a replacement for your MLS portal — it pulls data from it",
];

export function ComparisonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-16 md:py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 32px)", color: "#11226a" }}
        >
          What REConnect Is — and Is Not
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-5 md:p-7 border"
            style={{
              background: "linear-gradient(150deg, rgba(10,59,149,0.04) 0%, rgba(16,224,249,0.04) 100%)",
              borderColor: "rgba(10,59,149,0.1)",
            }}
          >
            <p className="font-bold mb-5" style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#0a3b95" }}>
              ✓ REConnect IS
            </p>
            <div className="flex flex-col gap-4">
              {isItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 4L6.5 11.5L3 7.5" stroke="#0a3b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, color: "#374151", lineHeight: 1.65 }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IS NOT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-5 md:p-7 border"
            style={{
              background: "rgba(238,109,104,0.04)",
              borderColor: "rgba(238,109,104,0.15)",
            }}
          >
            <p className="font-bold mb-5" style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ee6d68" }}>
              ✗ REConnect Is NOT
            </p>
            <div className="flex flex-col gap-4">
              {isNotItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6.5" stroke="#ee6d68" strokeWidth="1.33" />
                      <path d="M10 6L6 10M6 6L10 10" stroke="#ee6d68" strokeWidth="1.33" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, color: "#374151", lineHeight: 1.65 }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
