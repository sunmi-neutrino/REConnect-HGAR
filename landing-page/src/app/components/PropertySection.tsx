import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles, Globe } from "lucide-react";
import swlGraphic from "../../assets/property/slw-mockup.png";
import getStartedIcon from "../../assets/navbar/get-started-icon.svg";
import viewSampleIcon from "../../assets/canva/view-sample-icon.svg";

const included = [
  {
    icon: Sparkles,
    title: "Auto-Generated Property Website",
    description: "Every active listing gets its own beautiful property website, automatically populated with your MLS data — no manual input required.",
    gradient: "linear-gradient(135deg, #008AD0, #0A3B95)",
  },
  {
    icon: Globe,
    title: "Purchase a Custom Domain Available",
    description: "Upgrade with a custom domain for a polished, professional URL unique to your listing.",
    gradient: "linear-gradient(135deg, #008AD0, #0A3B95)",
  },
];

export function PropertySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="property-websites" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #F6F7FA 0%, #EEF0FF 100%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side — no shadow/glow bg */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center order-1 lg:order-1"
          >
            <div className="relative max-w-[280px] sm:max-w-md w-full mb-8 sm:mb-0">
              <img
                src={swlGraphic}
                alt="REConnect single listing website on desktop and mobile"
                className="w-full block"
                style={{ filter: "drop-shadow(0 30px 40px rgba(10,40,90,0.28)) drop-shadow(0 8px 12px rgba(10,40,90,0.12))" }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 w-14 h-14 sm:-top-4 sm:-right-4 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #EE6D68, #B14DFF)",
                  border: "2.5px solid white",
                }}
              >
                <span className="text-white text-[10px] sm:text-xs font-bold text-center leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  ONE<br />CLICK
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <div className="text-center lg:text-left">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, rgba(10,59,149,0.08), rgba(16,224,249,0.08))",
                  color: "#0A3B95",
                  border: "1px solid rgba(10,59,149,0.15)",
                }}
              >
                Property Websites
              </span>
              <h2
                className="text-[#11226A] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.4rem)", lineHeight: 1.2 }}
              >
                Activate Your{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #0A3B95, #10E0F9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Property Websites
                </span>{" "}
                in one click
              </h2>
              <p
                className="text-[#4B5563] mb-6 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.75 }}
              >
                Every HGAR member gets <strong style={{ color: "#0A3B95" }}>one free Single Listing Website</strong> automatically populated with live MLS data for your most expensive active listing at launch.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {included.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start p-4 rounded-2xl"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                    style={{ background: feature.gradient }}
                  >
                    <feature.icon size={18} color="white" />
                  </div>
                  <div>
                    <p
                      className="text-[#1B2E41] mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                    >
                      {feature.title}
                    </p>
                    <p
                      className="text-[#6B7280]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.8rem", lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA buttons — centered across the full section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-12"
        >
          <motion.a
            href="#login"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold border border-transparent w-full sm:w-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              background: "linear-gradient(135deg, #008AD0, #0A3B95)",
              boxShadow: "0 8px 12px rgba(10,59,149,0.3)",
            }}
          >
            <img src={getStartedIcon} alt="" className="size-4" style={{ filter: "brightness(0) invert(1)" }} />
            Activate Your Websites
          </motion.a>
          <motion.a
            href="https://demo.slw.homes/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white font-semibold border border-transparent w-full sm:w-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#0A3B95",
              boxShadow: "0 8px 12px rgba(10,59,149,0.3)",
            }}
          >
            <img src={viewSampleIcon} alt="" className="size-4" />
            View Sample Website
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
