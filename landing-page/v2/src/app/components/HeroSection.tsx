import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { REConnectLogo, HGARLogo } from "./logos";
import imgCanva from "../../imports/LandingPageForReConnect-1/586739e321315c30f93bcd697f03e692663fefe9.png";
import imgSLW from "../../imports/SLW.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start overflow-hidden -mt-[100px] pt-[100px] sm:mt-0 sm:pt-0 max-h-[860px] sm:max-h-none"
      style={{ background: "#0B1F3A" }}
    >
      {/* Animated gradient layers — cycles between #0B1F3A, #1B2166, #8D5D8E */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [1, 0, 0, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
        style={{ background: "linear-gradient(160deg, #0B1F3A 0%, #1B2166 60%, #8D5D8E 100%)" }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
        style={{ background: "linear-gradient(130deg, #8D5D8E 0%, #1B2166 50%, #0B1F3A 100%)" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-[1]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        animate={{ opacity: [0.18, 0.28, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
          background: "radial-gradient(circle, rgba(177,77,255,0.25) 0%, rgba(10,59,149,0.12) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-[113px] sm:pt-[130px] flex flex-col items-center text-center"
      >
        {/* ── Partnership logos (above headline) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-5 mb-6 sm:mb-10"
        >
          <HGARLogo className="h-6 sm:h-8" style={{ width: "auto", opacity: 0.85 }} />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 20, fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>+</span>
          <REConnectLogo className="h-4 sm:h-5" style={{ width: "auto", opacity: 0.85 }} />
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 w-full"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.05 }}
        >
          <span className="block text-white" style={{ fontSize: "clamp(40px, 7vw, 82px)" }}>
            From MLS to Market.
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(40px, 7vw, 82px)",
              background: "linear-gradient(95deg, #10e0f9 0%, #b14dff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            In Minutes.
          </span>
        </motion.h1>

        {/* ── Sub-copy ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-10 w-full max-w-2xl"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
          }}
        >
          REConnect gives every HGAR member live MLS listing data, seamless Canva integration, and auto-generated property websites — one free platform that covers your entire real estate marketing workflow.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-8 sm:mb-16 w-full"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 15,
              background: "linear-gradient(167deg, #008ad0 0%, #0a3b95 100%)",
              boxShadow: "0 8px 28px rgba(10,59,149,0.5)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="5.5" cy="6.5" r="3" stroke="white" strokeWidth="1.4"/>
              <path d="M7.5 8.5l6 6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M11 11.5l1.5-1.5M12.5 10l1.5-1.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            Log into REConnect
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full font-semibold"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.75)",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            See What's Included
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v9M3.5 8L7 11.5l3.5-3.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>

        {/* ── Overlapping screenshots ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl mx-auto overflow-hidden"
          style={{ height: 260 }}
        >
          {/* Bottom fade mask */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{ height: 80, background: "linear-gradient(to bottom, transparent, #07111f)" }}
          />

          {/* Back image — listing website, slightly left + tilted */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
            style={{
              left: "2%",
              top: "8%",
              width: "65%",
              zIndex: 1,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img src={imgSLW} alt="REConnect listing website" className="w-full object-cover block" />
          </motion.div>

          {/* Front image — Canva plugin, right + elevated */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
            style={{
              right: "0%",
              top: "0%",
              width: "56%",
              zIndex: 2,
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              border: "1px solid rgba(177,77,255,0.3)",
            }}
          >
            <img src={imgCanva} alt="REConnect Canva plugin" className="w-full object-contain block" />
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
}
