import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ValueSection } from "./components/ValueSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { CanvaSection } from "./components/CanvaSection";
import { PropertySection } from "./components/PropertySection";
import { ComingSoonSection } from "./components/ComingSoonSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { REConnectLogo } from "./components/logos";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
      <NavBar />
      <HeroSection />
      <div id="benefits"><BenefitsSection /></div>
      <CTASection />
      <div id="how-it-works"><ValueSection /></div>
      <ComparisonSection />
      <div style={{ height: 1, background: "#e5e7eb" }} />
      <div id="canva"><CanvaSection /></div>
      <div id="property"><PropertySection /></div>
      <ComingSoonSection />
      <div id="contact"><ContactSection /></div>

      {/* Footer */}
      <footer
        className="py-12 px-6 flex flex-col items-center gap-4"
        style={{ background: "#09172d", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <REConnectLogo style={{ height: 22, width: "auto", opacity: 0.75 }} />
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          © 2025 REConnect. All rights reserved. · Powered by Neutrino Inc.
        </p>
      </footer>
    </div>
  );
}
