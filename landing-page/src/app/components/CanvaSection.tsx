import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import imgScreenshot from "../../imports/Container/586739e321315c30f93bcd697f03e692663fefe9.png";

const steps = [
  "Go to Canva.com and log into your Canva account.",
  "Go to the App Store in Canva.",
  'Search "reconnect" within the search bar.',
  "Click on the app and open with a new or existing design from your folder.",
  'Once your design or template is open, click "Login to REConnect". Then click "Connect".',
  "Enter your login credentials in the pop up window and click \"Sign in\".",
  "Your listings should now appear on the left hand side in the REConnect app.",
  "Enjoy the ease of REConnect!",
];

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

        {/* Split layout: steps + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Steps — on mobile rendered second (image comes first via order) */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="flex gap-4 items-start group"
              >
                {/* Step number */}
                <div
                  className="flex items-center justify-center shrink-0 w-9 h-9 rounded-full text-white text-sm transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    background:
                      i === steps.length - 1
                        ? "linear-gradient(135deg, #B14DFF, #10E0F9)"
                        : "linear-gradient(135deg, #0A3B95, #008AD0)",
                    boxShadow: "0 4px 12px rgba(10,59,149,0.3)",
                  }}
                >
                  {i + 1}
                </div>
                {/* Step text */}
                <div
                  className="flex-1 py-2 px-4 rounded-xl transition-all duration-300"
                  style={{
                    background: "transparent",
                    border: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#F6F7FA";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "transparent";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
                  }}
                >
                  <p
                    className="text-[#374151] leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.6 }}
                  >
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-4"
            >
              <motion.a
                href="https://www.canva.com/apps/search?q=reconnect"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold w-full sm:w-auto"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #B14DFF, #79309E)",
                  boxShadow: "0 8px 24px rgba(177,77,255,0.35)",
                }}
              >
                <ExternalLink size={16} />
                Get REConnect Canva Plugin
              </motion.a>
            </motion.div>
          </div>

          {/* Screenshot image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative max-w-sm w-full">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 scale-95"
                style={{ background: "linear-gradient(135deg, #B14DFF, #10E0F9)" }}
              />
              <img
                src={imgScreenshot}
                alt="REConnect Canva plugin interface"
                className="relative shadow-2xl w-full object-contain"
                style={{ border: "1px solid rgba(177,77,255,0.2)" }}
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl backdrop-blur-sm"
                style={{
                  background: "rgba(17,34,106,0.85)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-white text-xs text-center"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                >
                  REConnect inside Canva — your listings, ready to drag & drop
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
