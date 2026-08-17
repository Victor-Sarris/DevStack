import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem, viewportOnce } from "../lib/animations";

function Vision() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full p-6 sm:p-8 md:p-10"
      >
        <SectionHeading
          kicker="Nossa missão"
          title="O que queremos mudar"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            variants={staggerItem}
            className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10"
          >
            <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2">
              Eliminar o Trabalho Manual
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Automatizando tarefas repetitivas para que nossos clientes possam
              focar no que realmente importa:{" "}
              <span className="font-bold">estratégia e criatividade</span>.
            </p>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10"
          >
            <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2">
              Acessibilidade Tecnológica
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Levar soluções de automação, IoT, Sistemas de Gestão e controle
              automáticos na palma da sua mão.{" "}
              <span className="font-bold">
                Antes restritas a grandes corporações, para negócios de todos os
                tamanhos.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Vision;
