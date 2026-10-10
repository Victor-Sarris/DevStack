import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import About from "../components/About";
import Services from "../components/Services";
import Vision from "../components/Vision";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

import { BlackHoleHeroSection } from "../components/black-hore-hero-section.jsx";

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#05030a] text-[#f5f3ff] font-sans overflow-x-hidden">
      {/* Fundo fixo */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <BlackHoleHeroSection />

        {/* Vinheta escura — mantém contraste do conteúdo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(5,3,10,0.6)_70%)]" />

        {/* Bloom violeta no topo (horizonte de eventos) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(139,92,246,0.20)_0%,transparent_55%)]" />

        {/* Bloom âmbar na base (disco de acreção) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_115%,rgba(251,146,60,0.14)_0%,transparent_60%)]" />

        {/* Halo ciano sutil nas laterais */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(34,211,238,0.08)_0%,transparent_45%),radial-gradient(ellipse_at_100%_50%,rgba(99,102,241,0.10)_0%,transparent_45%)]" />
      </div>

      <Navbar />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center p-3 sm:p-4 md:p-10 pt-20 md:pt-24 pb-10">
        <div className="w-full max-w-7xl bg-[#0a0714]/55 backdrop-blur-2xl border border-violet-400/15 rounded-3xl md:rounded-[3rem] shadow-[0_0_90px_-25px_rgba(139,92,246,0.55),0_0_140px_-40px_rgba(251,146,60,0.35)] overflow-hidden">
          <Hero />
          <TechMarquee />
          <About />
          <Services />
          <Vision />
          <Process />
          <Projects />
          <Team />
          <CTA />
          <Footer />
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Home;
