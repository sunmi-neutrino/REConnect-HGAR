import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Network, BookOpen } from "lucide-react";
import imgPortfolios from "../../assets/coming-soon/portfolios.png";
import imgSpotlights from "../../assets/coming-soon/spotlights.png";
import imgNetwork from "../../assets/coming-soon/network.png";

const upcoming = [
  {
    key: "portfolios",
    img: imgPortfolios,
    icon: BookOpen,
    title: "Portfolios",
    description: "Showcase your full listing portfolio in one beautifully branded, shareable page.",
    gradient: "linear-gradient(135deg, #008AD0, #0A3B95)",
    delay: 0.1,
  },
  {
    key: "spotlights",
    img: imgSpotlights,
    icon: Star,
    title: "Spotlights",
    description: "Highlight featured listings and agents with dynamic spotlight pages that drive engagement.",
    gradient: "linear-gradient(135deg, #B14DFF, #79309E)",
    delay: 0.2,
  },
  {
    key: "network",
    img: imgNetwork,
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
    <section id="coming-soon" className="min-h-screen flex items-center py-24 relative overflow-hidden">
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

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6">
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
            Coming Soon
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
          {upcoming.map((item) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group relative h-[300px] cursor-default"
              style={{ perspective: "1200px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front — image preview */}
                <div
                  className="absolute inset-0 rounded-2xl p-4 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="relative rounded-xl overflow-hidden h-full">
                    <img
                      src={item.img}
                      alt={`${item.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <span
                      className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full border border-white/15 text-white/70 backdrop-blur-sm"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, background: "rgba(9,23,45,0.5)" }}
                    >
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Back — title + description */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 flex flex-col gap-4 items-start justify-center"
                  style={{
                    background: item.gradient,
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15">
                    <item.icon size={20} color="white" />
                  </div>
                  <h3
                    className="text-white"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-white/85 leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
