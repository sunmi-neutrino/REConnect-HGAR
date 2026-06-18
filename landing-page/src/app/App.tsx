import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { LoginSection } from "./components/LoginSection";
import { ValueSection } from "./components/ValueSection";
import { CanvaSection } from "./components/CanvaSection";
import { PropertySection } from "./components/PropertySection";
import { ComingSoonSection } from "./components/ComingSoonSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <LoginSection />
      <ValueSection />
      <CanvaSection />
      <PropertySection />
      <ComingSoonSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
