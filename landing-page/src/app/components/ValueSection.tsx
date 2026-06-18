import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, XCircle, BarChart2, Users, Link } from "lucide-react";

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

const valuePoints = [
  {
    number: "01",
    title: "Works With Any Canva Account — Including Free",
    body: "REConnect is available inside Canva's App Store and works on every Canva account tier — Free, Pro, Teams, and Enterprise. No upgrade required.",
    gradient: "linear-gradient(135deg, #008AD0, #0A3B95)",
  },
  {
    number: "02",
    title: "Real-Time MLS Listing Data Inside Canva",
    body: "Once logged in, your MLS listings appear automatically — live photos, property details, agent info, all updating in real time. No manual entry.",
    gradient: "linear-gradient(135deg, #B14DFF, #79309E)",
  },
  {
    number: "03",
    title: "Drag-and-Drop — Not Just Autofill",
    body: "Place listing photos and data fields exactly where you want them on any Canva design. Full creative flexibility with zero hassle.",
    gradient: "linear-gradient(135deg, #10E0F9, #0A3B95)",
  },
  {
    number: "04",
    title: "Auto-Generated Single Listing Websites",
    body: "Every member gets one free Single Listing Website for their most expensive active listing — complete with QR code, digital brochure, and optional vanity domain.",
    gradient: "linear-gradient(135deg, #EE6D68, #B14DFF)",
  },
];

const optionalUpgrades = [
  {
    icon: BarChart2,
    title: "Market Statistics",
    description: "Organized by state, city, and zip code — build market reports directly inside Canva. Available for OneKey MLS.",
  },
  {
    icon: Users,
    title: "Admin Seat",
    description: "Access your full brokerage or office listing inventory, not just your personal listings.",
  },
  {
    icon: Link,
    title: "Vanity Domains",
    description: "Purchase a custom domain for your single listing website for a polished, professional URL.",
  },
];

export function ValueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const clarRef = useRef<HTMLDivElement>(null);
  const clarInView = useInView(clarRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Value proposition points */}
      <section className="py-24" style={{ background: "#F6F7FA" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, rgba(10,59,149,0.08), rgba(177,77,255,0.08))",
                color: "#0A3B95",
                border: "1px solid rgba(10,59,149,0.15)",
              }}
            >
              Why REConnect
            </span>
            <h2
              className="text-[#11226A]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              How REConnect is{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0A3B95, #B14DFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                different
              </span>
            </h2>
          </motion.div>

          {/* 4 value point cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {valuePoints.map((pt, i) => (
              <motion.div
                key={pt.number}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 p-6 rounded-2xl bg-white cursor-default"
                style={{ border: "1px solid #E5E7EB", transition: "box-shadow 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(10,59,149,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 text-white"
                  style={{ background: pt.gradient, fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.8rem" }}
                >
                  {pt.number}
                </div>
                <div>
                  <h3
                    className="text-[#1B2E41] mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                  >
                    {pt.title}
                  </h3>
                  <p
                    className="text-[#6B7280]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.83rem", lineHeight: 1.65 }}
                  >
                    {pt.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional upgrades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
          >
            <p
              className="text-[#11226A] mb-4 text-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Optional Upgrades Available
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {optionalUpgrades.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex gap-3 items-start p-4 rounded-2xl"
                  style={{ border: "none" }}
                >
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-full shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(10,59,149,0.08), rgba(177,77,255,0.08))", border: "1px solid rgba(10,59,149,0.12)" }}
                  >
                    <item.icon size={15} color="#0A3B95" />
                  </div>
                  <div>
                    <p
                      className="text-[#1B2E41] mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.82rem" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-[#6B7280]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.77rem", lineHeight: 1.55 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Is / Is Not clarifier */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            ref={clarRef}
            initial={{ opacity: 0, y: 20 }}
            animate={clarInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-10"
          >
            <h2
              className="text-[#11226A]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              What REConnect Is — and Is Not
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={clarInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, rgba(10,59,149,0.04), rgba(16,224,249,0.04))", border: "1px solid rgba(10,59,149,0.1)" }}
            >
              <p
                className="text-[#0A3B95] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
              >
                ✓ REConnect IS
              </p>
              <ul className="flex flex-col gap-3">
                {isItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#0A3B95] shrink-0 mt-0.5" />
                    <span
                      className="text-[#374151]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.83rem", lineHeight: 1.6 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* IS NOT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={clarInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl"
              style={{ background: "rgba(238,109,104,0.04)", border: "1px solid rgba(238,109,104,0.15)" }}
            >
              <p
                className="text-[#EE6D68] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
              >
                ✗ REConnect Is NOT
              </p>
              <ul className="flex flex-col gap-3">
                {isNotItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle size={16} className="text-[#EE6D68] shrink-0 mt-0.5" />
                    <span
                      className="text-[#374151]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.83rem", lineHeight: 1.6 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
