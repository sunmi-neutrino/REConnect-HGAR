import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const subjects = ["General Inquiry", "Account Access", "Upgrade Question", "Technical Support", "Other"];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section className="bg-white py-16 md:py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex mb-4"
            >
              <span
                className="px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold border"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#0a3b95",
                  background: "linear-gradient(167deg, rgba(10,59,149,0.08), rgba(177,77,255,0.08))",
                  borderColor: "rgba(10,59,149,0.15)",
                }}
              >
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 38px)", color: "#11226a", lineHeight: 1.2, marginBottom: 16 }}
            >
              Questions about{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0a3b95, #b14dff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                REConnect?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 }}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, color: "#4b5563", lineHeight: 1.75, marginBottom: 32 }}
            >
              Whether you're having trouble accessing your account, want to learn more about upgrading, or have questions about getting started — we're here to help.
            </motion.p>

            {/* Contact cards */}
            {[
              {
                label: "REConnect Support",
                value: "haydn@neutrinoinc.com",
                gradient: "linear-gradient(135deg, #0a3b95, #008ad0)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15 12.27a1.5 1.5 0 01-1.04 1.43c-1.8.6-7.12.6-8.92 0A1.5 1.5 0 013 12.27V5.73A1.5 1.5 0 014.04 4.3c1.8-.6 7.12-.6 8.92 0A1.5 1.5 0 0115 5.73v6.54z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 6l6 4 6-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "REConnect Website",
                value: "reconnectapp.com",
                gradient: "linear-gradient(135deg, #b14dff, #79309e)",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="6.5" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 2.5c0 0-2.5 2.5-2.5 6.5s2.5 6.5 2.5 6.5M9 2.5c0 0 2.5 2.5 2.5 6.5s-2.5 6.5-2.5 6.5" stroke="white" strokeWidth="1.5"/>
                    <path d="M2.5 9h13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3.5 6h11M3.5 12h11" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-4 items-center mb-4"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: c.gradient }}
                >
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#1b2e41" }}>{c.label}</p>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#0a3b95" }}>{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-5 md:p-8 rounded-3xl border"
            style={{ background: "#f6f7fa", borderColor: "#e5e7eb" }}
          >
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 17.6, color: "#11226a", marginBottom: 24 }}>
              Send us a message
            </h3>

            <div className="flex flex-col gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Full Name", placeholder: "Jane Smith", key: "name" },
                  { label: "Email", placeholder: "jane@brokerage.com", key: "email" },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-1.5">
                    <label style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#374151" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.key === "email" ? "email" : "text"}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border bg-white outline-none text-sm transition-shadow focus:shadow-[0_0_0_2px_rgba(10,59,149,0.2)]"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#374151", borderColor: "#e5e7eb" }}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#374151" }}>Subject</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border bg-white outline-none text-sm"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#374151", borderColor: "#e5e7eb" }}
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                >
                  <option value="">Select a subject…</option>
                  {subjects.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#374151" }}>Message</label>
                <textarea
                  placeholder="Tell us how we can help…"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border bg-white outline-none text-sm resize-none transition-shadow focus:shadow-[0_0_0_2px_rgba(10,59,149,0.2)]"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#374151", borderColor: "#e5e7eb" }}
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-white font-semibold"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 16,
                  background: "linear-gradient(172deg, #008ad0 0%, #0a3b95 100%)",
                  boxShadow: "0 8px 12px rgba(10,59,149,0.3)",
                }}
              >
                {/* Paper plane / send icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2L1.5 7l5 2M14 2L9 14.5l-2.5-5.5M14 2L6.5 9" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
