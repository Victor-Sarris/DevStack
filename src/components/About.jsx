import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { stats } from "../data/content";
import {
  fadeUpVariant,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../lib/animations";

function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 py-12 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full p-6 sm:p-8 md:p-10"
      >
        <SectionHeading
          kicker="Quem somos"
          title="Mais Sobre Nós"
          align="left"
        />
        <motion.p
          variants={fadeUpVariant}
          className="text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left"
        >
          A DevStack nasceu da necessidade de otimizar processos repetitivos e
          transformar ideias complexas em sistemas ágeis. Nosso foco principal é
          utilizar tecnologias modernas e arquiteturas escaláveis para entregar
          não apenas código, mas sim tempo e produtividade para os nossos
          clientes.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col items-center md:items-start gap-1 p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="text-2xl md:text-3xl font-bold text-purple-400">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-gray-400 text-center md:text-left">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
