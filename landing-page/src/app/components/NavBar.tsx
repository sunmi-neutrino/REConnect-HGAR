import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ExternalLink } from "lucide-react";
import reconnectWhiteLogo from "../../imports/ReConnect_logo_final-white.svg";
import reconnectColorLogo from "../../imports/ReConnect_logo_final.svg";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Canva Plugin", href: "#canva" },
  { label: "Property Websites", href: "#property-websites" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (!open) {
        setHidden(y > lastY.current && y > 80);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [open]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: hidden && !open ? "-100%" : 0, opacity: hidden && !open ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: open ? "transparent" : scrolled ? "rgba(255,255,255,0.97)" : "rgba(9, 23, 45, 0.5)",
          backdropFilter: open ? "none" : "blur(16px)",
          borderBottom: (!open && scrolled) ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
          boxShadow: (!open && scrolled) ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="w-full px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={scrolled && !open ? reconnectColorLogo : reconnectWhiteLogo} alt="REConnect" className="h-5 w-auto" />
          </div>

          {/* Right: Login CTA (desktop only, hidden when menu open) + Hamburger */}
          <div className="flex items-center gap-3">
            {!open && (
              <a
                href="#login"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #008AD0, #0A3B95)",
                  boxShadow: "0 4px 16px rgba(10,59,149,0.4)",
                }}
              >
                <ExternalLink size={13} />
                Login
              </a>
            )}
            <button
              className={`p-2 transition-colors relative z-60 ${scrolled && !open ? "text-[#09172D]/70 hover:text-[#09172D]" : "text-white/80 hover:text-white"}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "rgba(9, 23, 45, 0.97)", backdropFilter: "blur(20px)" }}
          >
            {/* Center area — nav links + login */}
            <div className="flex-1 flex flex-col items-center justify-center px-8">
              <nav className="w-full max-w-sm">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center py-4 text-white/70 hover:text-white transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                    >
                      {link.label}
                    </a>
                    <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
                  </motion.div>
                ))}

                {/* Login button — immediately after Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                  className="pt-6 flex justify-center"
                >
                  <a
                    href="#login"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      background: "linear-gradient(135deg, #008AD0, #0A3B95)",
                      boxShadow: "0 8px 24px rgba(10,59,149,0.4)",
                    }}
                  >
                    <ExternalLink size={16} />
                    Login to REConnect
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
