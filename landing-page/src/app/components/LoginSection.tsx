import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Mail } from "lucide-react";

export function LoginSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="login" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #09172D 0%, #1B2166 50%, #79309E 100%)",
        }}
      />
      {/* Decorative blob */}
      <div
        className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #10E0F9, transparent)" }}
      />
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #B14DFF, transparent)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-white/60 uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
          >
            Get Started
          </p>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
            }}
          >
            Ready to access{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #10E0F9, #B14DFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REConnect?
            </span>
          </h2>
          <p
            className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "1rem" }}
          >
            You will receive your login credentials via email at launch. Use the button below to access the platform once you have your credentials.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.a
              href="https://reconnect.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold w-full sm:w-auto"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #008AD0, #0A3B95)",
                boxShadow: "0 8px 32px rgba(10, 59, 149, 0.5)",
              }}
            >
              <ExternalLink size={18} />
              Log into REConnect
            </motion.a>
          </div>

          {/* Trust note */}
          <div
            className="inline-flex items-start gap-3 px-6 py-4 rounded-2xl text-left"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Mail size={18} className="text-[#FFC685] shrink-0 mt-0.5" />
            <p
              className="text-white/70 text-sm leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              <strong className="text-white/90">Can't access your account?</strong>{" "}
              Contact us at{" "}
              <a
                href="mailto:support@reconnect.app"
                className="text-[#10E0F9] hover:underline"
              >
                support@reconnect.app
              </a>{" "}
              and we'll get you set up right away.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
