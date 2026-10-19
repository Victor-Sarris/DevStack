import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot,
  Cpu,
  Code2,
  Workflow,
  ScanFace,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "../../data/content";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../lib/animations";

const icons = { Bot, Cpu, Code2, Workflow, ScanFace, LayoutDashboard };

const MotionLink = motion(Link);

function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeading kicker="O que fazemos" title="Nossos Serviços" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <MotionLink
                key={service.title}
                to={service.link}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 10px 40px -10px rgba(251, 146, 60, 0.3)",
                }}
                className="group relative flex flex-col h-full overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 no-underline text-inherit cursor-pointer transition-all duration-300 hover:border-amber-500/50 hover:bg-black/60"
              >
                {/* Efeito de brilho no fundo ao passar o mouse */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Ícone animado */}
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0)] group-hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]">
                  <Icon size={26} />
                </div>

                {/* Conteúdo */}
                <h3 className="relative text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-sm md:text-base text-gray-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Rodapé indicando que é clicável */}
                <div className="relative mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-sm font-bold text-amber-500/70 group-hover:text-amber-400 transition-colors">
                  <span>Acessar serviço</span>
                  <ArrowRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </MotionLink>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
