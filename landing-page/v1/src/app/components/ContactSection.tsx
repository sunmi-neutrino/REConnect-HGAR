import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
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
              Get in Touch
            </span>
            <h2
              className="text-[#11226A] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.4rem)", lineHeight: 1.2 }}
            >
              Questions about
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #0A3B95, #B14DFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                REConnect?
              </span>
            </h2>
            <p
              className="text-[#4B5563] mb-10 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.75 }}
            >
              Whether you're having trouble accessing your account, want to learn more about upgrading, or have questions about getting started — we're here to help.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              <div
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ border: "none" }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                  style={{ background: "linear-gradient(135deg, #0A3B95, #008AD0)" }}
                >
                  <Mail size={18} color="white" />
                </div>
                <div>
                  <p
                    className="text-[#1B2E41] mb-0.5"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    REConnect Support
                  </p>
                  <a
                    href="mailto:haydn@neutrinoinc.com"
                    className="text-[#0A3B95] hover:underline text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                  >
                    haydn@neutrinoinc.com
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ border: "none" }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                  style={{ background: "linear-gradient(135deg, #B14DFF, #79309E)" }}
                >
                  <span className="text-white font-bold text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>RC</span>
                </div>
                <div>
                  <p
                    className="text-[#1B2E41] mb-0.5"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    REConnect Website
                  </p>
                  <a
                    href="https://reconnectapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A3B95] hover:underline text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                  >
                    reconnectapp.com
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 text-center h-full py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0A3B95, #10E0F9)" }}
                >
                  <CheckCircle size={32} color="white" />
                </div>
                <h3
                  className="text-[#11226A]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
                >
                  Message sent!
                </h3>
                <p
                  className="text-[#6B7280] max-w-xs"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.9rem" }}
                >
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-8 rounded-3xl"
                style={{ border: "none" }}
              >
                <h3
                  className="text-[#11226A] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
                >
                  Send us a message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#374151] text-xs"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1B2E41] placeholder-[#9CA3AF] outline-none focus:border-[#0A3B95] transition-colors text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#374151] text-xs"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@brokerage.com"
                      className="px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1B2E41] placeholder-[#9CA3AF] outline-none focus:border-[#0A3B95] transition-colors text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#374151] text-xs"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1B2E41] outline-none focus:border-[#0A3B95] transition-colors text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <option value="">Select a topic…</option>
                    <option value="access">Can't access my account</option>
                    <option value="canva">Canva plugin help</option>
                    <option value="website">Property website question</option>
                    <option value="upgrade">Upgrade / pricing inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#374151] text-xs"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us how we can help…"
                    className="px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1B2E41] placeholder-[#9CA3AF] outline-none focus:border-[#0A3B95] transition-colors text-sm resize-none"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold mt-2"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #008AD0, #0A3B95)",
                    boxShadow: "0 8px 24px rgba(10,59,149,0.3)",
                  }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
