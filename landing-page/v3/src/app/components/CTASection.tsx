import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(157deg, #09172d 0%, #1b2166 50%, #79309e 100%)" }}
    >
      {/* Orbs */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full blur-[100px] opacity-20" style={{ background: "radial-gradient(circle, #10e0f9, transparent)" }} />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, #b14dff, transparent)" }} />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="uppercase tracking-widest text-sm font-medium mb-4"
          style={{ fontFamily: "Poppins, sans-serif", color: "rgba(255,255,255,0.6)" }}
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 44px)", color: "white", lineHeight: 1.2, marginBottom: 16 }}
        >
          Ready to access{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #10e0f9, #b14dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            REConnect?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="max-w-lg mx-auto mb-10"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}
        >
          You will receive your login credentials via email at launch. Use the button below to access the platform once you have your credentials.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-10 py-5 rounded-full text-white font-semibold text-base"
            style={{
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(167deg, #008ad0 0%, #0a3b95 100%)",
              boxShadow: "0 8px 32px rgba(10,59,149,0.6)",
            }}
          >
            {/* Key / login icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="6.5" cy="7.5" r="3.5" stroke="white" strokeWidth="1.5"/>
              <path d="M9 9.5l7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M13 13l2-2M14.5 11.5l2-2" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Log into REConnect
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl sm:whitespace-nowrap text-left"
          style={{ background: "rgba(255,255,255,0.07)", border: "0.833px solid rgba(255,255,255,0.12)" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7.5" stroke="#FFC685" strokeWidth="1.5"/>
            <path d="M9 8.5v4" stroke="#FFC685" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="9" cy="6" r="0.75" fill="#FFC685"/>
          </svg>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}>
            <span className="font-bold text-white/90">Can't access your account? </span>
            <span className="text-white/70">Contact us at </span>
            <span style={{ color: "#10e0f9" }}>support@reconnect.app</span>
            <span className="text-white/70"> and we'll get you set up right away.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
