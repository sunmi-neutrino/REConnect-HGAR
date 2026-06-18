import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
// useScroll without a target reads window scroll — no positioned-container warning
import { ExternalLink, ChevronDown, CheckCircle, Globe } from "lucide-react";
import imgListingPreview from "../../imports/SLW.png";
import imgCanvaScreen from "../../imports/Container/586739e321315c30f93bcd697f03e692663fefe9.png";
import reconnectWhiteLogo from "../../imports/ReConnect_logo_final-white.svg";
import hgarLogo from "../../imports/HGAR_logo_white.svg";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "25%"]);
  const textY = useTransform(scrollY, [0, 600], ["0%", "15%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #09172D 0%, #1B2166 45%, #5A2080 75%, #79309E 100%)",
      }}
    >
      {/* Decorative background layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Soft ambient blobs — unchanged */}
        <div className="absolute rounded-full blur-[140px] opacity-25" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, #B14DFF 0%, transparent 70%)", top: "-150px", right: "-150px" }} />
        <div className="absolute rounded-full blur-[120px] opacity-15" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, #10E0F9 0%, transparent 70%)", bottom: "-60px", left: "-80px" }} />

        {/* Large concentric ring arcs — top-right corner */}
        <svg className="absolute top-0 right-0 opacity-[0.07]" width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="600" cy="0" r="200" stroke="white" strokeWidth="1" />
          <circle cx="600" cy="0" r="320" stroke="white" strokeWidth="0.75" />
          <circle cx="600" cy="0" r="440" stroke="white" strokeWidth="0.5" />
          <circle cx="600" cy="0" r="560" stroke="white" strokeWidth="0.4" />
        </svg>

        {/* Concentric rings — bottom-left corner */}
        <svg className="absolute bottom-0 left-0 opacity-[0.06]" width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle cx="0" cy="480" r="160" stroke="white" strokeWidth="1" />
          <circle cx="0" cy="480" r="260" stroke="white" strokeWidth="0.75" />
          <circle cx="0" cy="480" r="360" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Diagonal ruled lines — subtle grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>

        {/* Scattered small dots */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {[
            [120, 180], [340, 90], [560, 220], [780, 60], [1020, 150], [1160, 300],
            [80, 420], [260, 560], [480, 680], [700, 480], [920, 620], [1100, 500],
            [200, 720], [440, 380], [660, 140], [860, 350], [1050, 680],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2 : 1.2} fill="white" />
          ))}
        </svg>

        {/* Single large cross-hair accent — center-right */}
        <svg className="absolute opacity-[0.06]" style={{ top: "38%", right: "8%" }} width="60" height="60" viewBox="0 0 60 60" fill="none">
          <line x1="30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="0.75" />
          <line x1="0" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.75" />
          <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text content — on mobile renders second (below image) */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex-1 text-center lg:text-left order-1 lg:order-1"
        >
          {/* HGAR + REConnect lockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6"
          >
            <img src={hgarLogo} alt="HGAR" className="h-5 w-auto sm:h-8" style={{ filter: "brightness(0) invert(1)" }} />
            <span className="text-white/30 text-lg sm:text-xl">+</span>
            <img src={reconnectWhiteLogo} alt="REConnect" className="h-4 w-auto sm:h-7" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
              lineHeight: 1.15,
            }}
          >
            HGAR is bringing you a{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFC685, #EE6D68, #B14DFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              new
            </span>{" "}
            member benefit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/70 mb-8 max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.75 }}
          >
            A powerful new platform to simplify your real estate marketing — connecting your MLS data directly into Canva and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start"
          >
            <a
              href="#login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold border border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #008AD0, #0A3B95)",
                boxShadow: "0 8px 32px rgba(10, 59, 149, 0.4)",
              }}
            >
              <ExternalLink size={16} />
              Log into REConnect
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Explore Benefits
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-white/35 text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Login credentials will be sent to your email at launch.
          </motion.p>
        </motion.div>

        {/* Right: Two stacked screenshots */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 w-full flex justify-center lg:justify-end relative order-2 lg:order-2"
        >
          <div className="relative w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-none">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30 scale-90"
              style={{ background: "linear-gradient(135deg, #B14DFF, #10E0F9)" }}
            />

            {/* Listing website preview — larger, behind */}
            <div className="relative">
              <img
                src={imgListingPreview}
                alt="REConnect listing website preview"
                className="relative shadow-2xl w-full object-cover"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              />

              {/* Canva screenshot — static, overlapping bottom-right corner */}
              <div
                className="absolute -bottom-6 -right-4 w-2/5 shadow-2xl overflow-hidden"
                style={{ border: "2px solid rgba(255,255,255,0.2)" }}
              >
                <img
                  src={imgCanvaScreen}
                  alt="REConnect Canva plugin"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Floating badge — MLS (same size as Property badge, shifted left of Canva screenshot) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute flex items-center gap-2 px-4 py-2.5 rounded-full shadow-xl backdrop-blur-sm whitespace-nowrap"
              style={{
                background: "rgba(9, 23, 45, 0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
                bottom: "-1.5rem",
                right: "calc(40% - 60px)",
              }}
            >
              <CheckCircle size={13} className="text-white/80 shrink-0" />
              <p className="text-white text-xs font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                MLS Data Auto-Populated
              </p>
            </motion.div>

            {/* Floating badge — Property website */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-xl backdrop-blur-sm"
              style={{
                background: "rgba(9, 23, 45, 0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Globe size={13} className="text-white/80 shrink-0" />
              <p className="text-white text-xs font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Free Property Website
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
