import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Globe, ChevronDown } from "lucide-react";
import canvaIconBadge from "../../assets/canva/canva-icon-badge.svg";

const canvaPoints = [
  {
    title: "MLS Listing Data",
    description: "Live photos, property details, and agent info pulled directly from the MLS in real time.",
  },
  {
    title: "Drag & Drop in Canva",
    description: "Place any listing data field or photo exactly where you want on any Canva design.",
  },
  {
    title: "Built-in Canva Templates",
    description: "Free canva templates included, plus the ability to add your brokerage's own templates right in the app.",
  },
];

const benefits = [
  {
    key: "canva",
    kind: "canva" as const,
    title: "REConnect Canva Plugin",
    delay: 0.1,
    href: "#canva",
  },
  {
    key: "listing-website",
    kind: "simple" as const,
    icon: Globe,
    gradient: "linear-gradient(180deg, #EE6D68 0%, #B14DFF 100%)",
    title: "A Single Listing Website & Digital Marketing Package",
    description: "Every member gets one free Single Listing Website and digital marketing package for their most expensive active listing at launch. One click activation for all your listings.",
    delay: 0.2,
    href: "#property-websites",
  },
];

function BenefitCard({ benefit }: { benefit: typeof benefits[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: benefit.delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl p-6 sm:p-9 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 cursor-default w-full max-w-[680px] mx-auto"
      style={{
        background: "#F6F7FA",
        border: "1px solid #E5E7EB",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(10, 59, 149, 0.12)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(10, 59, 149, 0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
      }}
    >
      {/* Header: icon + title */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 w-full">
        {benefit.kind === "canva" ? (
          <img src={canvaIconBadge} alt="" className="w-14 h-14 rounded-full shrink-0" />
        ) : (
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full shrink-0"
            style={{ background: benefit.gradient }}
          >
            <benefit.icon size={22} color="white" />
          </div>
        )}
        <h3
          className="text-[#1B2E41] flex-1"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}
        >
          {benefit.title}
        </h3>
      </div>

      {/* Body */}
      {benefit.kind === "canva" ? (
        <div className="flex flex-col items-center sm:items-start gap-5 w-full">
          {canvaPoints.map((point) => (
            <div key={point.title} className="flex flex-col items-center sm:items-start gap-1">
              <h4
                className="text-[#1B2E41]"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.125rem" }}
              >
                {point.title}
              </h4>
              <p
                className="text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.55 }}
              >
                {point.description}
              </p>
            </div>
          ))}
          <a
            href={benefit.href}
            className="inline-flex items-center gap-1 mt-1 group/btn"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#0A3B95" }}
          >
            Learn More
            <ChevronDown size={16} className="transition-transform group-hover/btn:translate-y-0.5" />
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center sm:items-start gap-2 w-full">
          <p
            className="text-[#6B7280] leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.55 }}
          >
            {benefit.description}
          </p>
          <a
            href={benefit.href}
            className="inline-flex items-center gap-1 mt-1 group/btn"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#0A3B95" }}
          >
            Learn More
            <ChevronDown size={16} className="transition-transform group-hover/btn:translate-y-0.5" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export function BenefitsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            Your Member Benefits
          </span>
          <h2
            className="text-[#11226A] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            What's included in your
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #0A3B95, #B14DFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REConnect membership
            </span>
          </h2>
          <p
            className="text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.75 }}
          >
            We're thrilled to introduce{" "}
            <strong style={{ color: "#124266", fontWeight: 600 }}>REConnect</strong>, a platform designed
            to simplify real estate marketing by connecting your MLS data wherever it needs to go, including
            directly into Canva. Here's what you'll have access to once we go live:
          </p>
        </motion.div>

        {/* Benefits stack */}
        <div className="flex flex-col items-center gap-5">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.key} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
