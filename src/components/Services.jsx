import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  Code2,
  Workflow,
  ScanFace,
  LayoutDashboard,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";
import { staggerContainer, staggerItem, viewportOnce } from "../lib/animations";

const icons = { Bot, Cpu, Code2, Workflow, ScanFace, LayoutDashboard };

function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
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
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.35)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
                className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5 text-green-400">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
