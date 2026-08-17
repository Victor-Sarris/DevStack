import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
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

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1}
            cAzimuthAngle={-350}
            cDistance={3.09}
            cPolarAngle={60}
            cameraZoom={0.99}
            color1="#58BAC7"
            color2="#C946CB"
            color3="#104534"
            destination="onCanvas"
            embedMode="off"
            envPreset="dawn"
            format="gif"
            fov={60}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="env"
            pixelDensity={1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="enabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.2}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="plane"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.2}
            uStrength={13}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(0,0,0,0.55)_70%)]" />
      </div>

      <Navbar />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center p-3 sm:p-4 md:p-10 pt-20 md:pt-24 pb-10">
        <div className="w-full max-w-7xl bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden">
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
