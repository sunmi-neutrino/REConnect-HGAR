import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgScreenshot from "../../assets/canva/canva-interface.png";
import playIcon from "../../assets/canva/play-icon.svg";
import getStartedIcon from "../../assets/navbar/get-started-icon.svg";
import viewSampleIcon from "../../assets/canva/view-sample-icon.svg";

export function CanvaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="canva" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, rgba(177,77,255,0.08), rgba(16,224,249,0.08))",
              color: "#79309E",
              border: "1px solid rgba(177,77,255,0.2)",
            }}
          >
            Canva Integration
          </span>
          <h2
            className="text-[#11226A] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Get the REConnect
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #B14DFF, #10E0F9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Canva Plugin
            </span>
          </h2>
          <p
            className="text-[#6B7280] max-w-xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.75 }}
          >
            Connect your MLS listings directly to Canva in just a few easy steps. Add your own brokerage templates and start creating stunning marketing materials instantly.
          </p>
        </motion.div>

        {/* Product screenshot with play overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center mb-12"
        >
          <div className="relative max-w-3xl w-full aspect-video group cursor-pointer">
            <img
              src={imgScreenshot}
              alt="REConnect Canva plugin interface"
              className="absolute inset-0 rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            <motion.img
              src={playIcon}
              alt=""
              whileHover={{ scale: 1.08 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 transition-transform"
            />
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://www.canva.com/apps/search?q=reconnect"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
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
            Get REConnect Canva App
          </motion.a>
          <motion.a
            href="https://www.canva.com/apps/search?q=reconnect"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
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
            View Sample REConnect Templates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
