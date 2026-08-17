import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { process } from "../data/content";
import { staggerContainer, staggerItem, viewportOnce } from "../lib/animations";

function Process() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeading
          kicker="Como trabalhamos"
          title="Do Problema à Solução"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {process.map((item, idx) => (
            <motion.div
              key={item.step}
              variants={staggerItem}
              className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 flex flex-col h-full"
            >
              <span className="text-3xl md:text-4xl font-bold text-purple-500/30 mb-3">
                {item.step}
              </span>
              <h3 className="text-base md:text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
              {idx < process.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-linear-to-r from-purple-500/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Process;
