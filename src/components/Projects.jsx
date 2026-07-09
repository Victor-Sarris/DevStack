import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";
import { staggerContainer, staggerItem, viewportOnce } from "../lib/animations";

function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeading kicker="Portfólio" title="Projetos Desenvolvidos" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.4)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full cursor-default"
            >
              <span className="text-[10px] md:text-xs font-bold text-green-500 tracking-wider mb-2">
                {project.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-6 grow">
                {project.description}
              </p>
              <div className="flex gap-2 opacity-70 text-xs md:text-sm flex-wrap">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-white/10 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={staggerItem}
            className="border border-dashed border-white/20 rounded-2xl p-6 md:p-8 flex flex-col h-full items-start justify-center gap-3 text-gray-400"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              Novo projeto a caminho
            </h3>
            <p className="text-sm md:text-base">
              Estamos desenvolvendo novas soluções. Em breve, mais novidades
              por aqui.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
