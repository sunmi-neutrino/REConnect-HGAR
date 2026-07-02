import hgarLogo from "../../assets/navbar/hgar-logo.svg";
import reconnectWordmark from "../../assets/navbar/reconnect-wordmark.svg";

const footerLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Canva Plugin", href: "#canva" },
  { label: "Property Websites", href: "#property-websites" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "Contact", href: "#contact" },
];

export function FooterSection() {
  return (
    <footer
      className="py-12 relative overflow-hidden"
      style={{ background: "#09172D", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img src={hgarLogo} alt="HGAR" className="h-[22px] w-auto" />
              <span className="text-[16px] leading-none" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.25)" }}>+</span>
              <img src={reconnectWordmark} alt="REConnect" className="h-[18px] w-auto opacity-50" />
            </div>
            <p
              className="text-white/30 text-xs text-center md:text-left"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              Powered by the{" "}
              <a
                href="https://neutrinoinc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10E0F9]/60 hover:text-[#10E0F9] transition-colors"
              >
                Neutrino System
              </a>
            </p>
            <p
              className="text-white/20 text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              A member benefit of the Hudson Gateway Association of Realtors®
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex items-center justify-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            © 2026 REConnect by Neutrino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
