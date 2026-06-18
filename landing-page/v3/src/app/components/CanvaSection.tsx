import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import imgCanva from "../../imports/LandingPageForReConnect-1/586739e321315c30f93bcd697f03e692663fefe9.png";

const steps = [
  { n: 1, text: "Go to Canva.com and log into your Canva account." },
  { n: 2, text: "Go to the App Store in Canva." },
  { n: 3, text: 'Search "reconnect" within the search bar.' },
  { n: 4, text: "Click on the app and open with a new or existing design from your folder." },
  { n: 5, text: 'Once your design or template is open, click "Login to REConnect". Then click "Connect".' },
  { n: 6, text: 'Enter your login credentials in the pop up window and click "Sign in".' },
  { n: 7, text: "Your listings should now appear on the left hand side in the REConnect app." },
  { n: 8, text: "Enjoy the ease of REConnect!" },
];

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="flex gap-4 items-start"
    >
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            background: isLast ? "linear-gradient(135deg, #b14dff, #10e0f9)" : "linear-gradient(135deg, #0a3b95, #008ad0)",
            boxShadow: "0 4px 12px rgba(10,59,149,0.3)",
          }}
        >
          {step.n}
        </div>
        {index < steps.length - 1 && (
          <div className="w-px flex-1 mt-2 mb-0 min-h-[24px]" style={{ background: "linear-gradient(to bottom, rgba(10,59,149,0.3), transparent)" }} />
        )}
      </div>
      <p className="pb-5 pt-1.5" style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
        {step.text}
      </p>
    </motion.div>
  );
}

export function CanvaSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="flex justify-center mb-4"
          >
            <span
              className="px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold border"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#79309e",
                background: "linear-gradient(170deg, rgba(177,77,255,0.08) 0%, rgba(16,224,249,0.08) 100%)",
                borderColor: "rgba(177,77,255,0.2)",
              }}
            >
              Canva Integration
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#11226a", lineHeight: 1.2 }}
          >
            Get the REConnect{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #b14dff, #10e0f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Canva Plugin
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#6b7280", lineHeight: 1.75 }}
          >
            Connect your MLS listings directly to Canva in just a few easy steps. Add your own brokerage templates and start creating stunning marketing materials instantly.
          </motion.p>
        </div>

        {/* Two-col: steps + sticky image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="order-2 lg:order-1">
            {steps.map((step, i) => (
              <Step key={i} step={step} index={i} />
            ))}

            {/* CTA button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 14,
                background: "linear-gradient(170deg, #b14dff 0%, #79309e 100%)",
                boxShadow: "0 8px 12px rgba(177,77,255,0.35)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2h4v4M14 2L8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get REConnect Canva Plugin
            </motion.button>
          </div>

          {/* Sticky parallax image */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 flex flex-col items-center">
            <motion.div
              style={{ y: imgY }}
              className="relative overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30 -z-10 scale-95"
                style={{ background: "linear-gradient(146deg, #b14dff, #10e0f9)" }}
              />
              <img
                src={imgCanva}
                alt="REConnect inside Canva — your listings, ready to drag & drop"
                className="w-full max-w-sm object-contain shadow-2xl"
                style={{ border: "0.833px solid rgba(177,77,255,0.2)" }}
              />
              {/* Caption */}
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 text-center text-white text-xs font-medium"
                style={{ fontFamily: "Poppins, sans-serif", background: "rgba(17,34,106,0.85)", border: "0.833px solid rgba(255,255,255,0.1)" }}
              >
                REConnect inside Canva — your listings, ready to drag & drop
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
