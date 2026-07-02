import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ExternalLink, Mail } from "lucide-react";

export function LoginSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Background parallax: the gradient + blobs drift vertically and the
  // background "closes up" (zooms in) as you scroll down through the section,
  // then reveals again (zooms back out) as you scroll back up — driven
  // directly by scroll position so it reverses smoothly either direction.
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const blob1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const blob2Scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Text parallax: content drifts up as you scroll up through the section,
  // mirroring the hero's scroll-linked text movement.
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["48px", "0px", "-48px"]);

  return (
    <section id="login" ref={sectionRef} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background — scroll-linked drift/zoom plus a slow, continuous gradient
          shift so the colors stay alive even while the section sits still,
          matching the hero's ambient background motion. */}
      <motion.div
        className="absolute -inset-y-24 inset-x-0"
        style={{
          y: bgY,
          scale: bgScale,
          backgroundImage: "linear-gradient(135deg, #09172D 0%, #1B2166 50%, #79309E 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Decorative blobs — drift + zoom at their own rates for depth */}
      <motion.div
        style={{ y: blob1Y, scale: blob1Scale }}
        className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #10E0F9, transparent)" }} />
      </motion.div>
      <motion.div
        style={{ y: blob2Y, scale: blob2Scale }}
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #B14DFF, transparent)" }} />
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 text-center">
        <motion.div style={{ y: textY }}>
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
              fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
              lineHeight: 1.15,
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
              Get Started
            </motion.a>
          </div>

          {/* Trust note */}
          <div className="inline-flex items-start gap-3 text-left">
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
        </motion.div>
      </div>
    </section>
  );
}
