import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { REConnectLogo } from "./logos";

const navItems = [
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Canva Plugin", href: "#canva" },
  { label: "Property Website", href: "#property" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function NavBar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ["rgba(9,23,45,0)", "rgba(9,23,45,0.96)"]);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (y) => {
      if (y < 80) { setVisible(true); }
      else if (y > lastY.current) { setVisible(false); setOpen(false); }
      else { setVisible(true); }
      lastY.current = y;
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between"
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{
          background: bg,
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        } as React.CSSProperties}
      >
        <REConnectLogo style={{ height: 20, width: "auto" }} />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", fontWeight: 500 }}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(167deg, #008ad0, #0a3b95)",
              boxShadow: "0 4px 14px rgba(10,59,149,0.4)",
            }}
          >
            Log In
          </motion.button>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 flex flex-col py-4 lg:hidden"
            style={{ background: "rgba(9,23,45,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { scrollTo(item.href); setOpen(false); }}
                className="px-8 py-3.5 text-left hover:bg-white/5 transition-colors"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
