import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Network, BookOpen } from "lucide-react";

const upcoming = [
  {
    icon: BookOpen,
    title: "Portfolios",
    description: "Showcase your full listing portfolio in one beautifully branded, shareable page.",
    gradient: "linear-gradient(135deg, #008AD0, #0A3B95)",
    delay: 0.1,
  },
  {
    icon: Star,
    title: "Spotlights",
    description: "Highlight featured listings and agents with dynamic spotlight pages that drive engagement.",
    gradient: "linear-gradient(135deg, #B14DFF, #79309E)",
    delay: 0.2,
  },
  {
    icon: Network,
    title: "Network",
    description: "Connect with other HGAR agents, share referrals, and grow your professional network inside REConnect.",
    gradient: "linear-gradient(135deg, #10E0F9, #0A3B95)",
    delay: 0.3,
  },
];

export function ComingSoonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="coming-soon" className="py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #09172D 0%, #1B2166 55%, #3A1060 100%)" }}
      />
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, #B14DFF, transparent)",
            top: "0",
            left: "30%",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #10E0F9, transparent)",
            bottom: "0",
            right: "10%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-4 border border-white/20 bg-white/10 text-white/70 backdrop-blur-sm"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            What's Coming Next
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            The future of
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FFC685, #EE6D68, #B14DFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REConnect is bright
            </span>
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "1rem" }}
          >
            Portfolios, Spotlights, Network and many more — the REConnect platform is continuously expanding. Here's a glimpse at what's on the roadmap for HGAR members.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcoming.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden group cursor-default"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(177,77,255,0.06), rgba(16,224,249,0.06))",
                }}
              />
              {/* Coming soon tag */}
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-full relative"
                  style={{ background: item.gradient }}
                >
                  <item.icon size={20} color="white" />
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/50"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                >
                  Coming Soon
                </span>
              </div>
              <h3
                className="text-white"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1rem" }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/50 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.83rem", lineHeight: 1.65 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
