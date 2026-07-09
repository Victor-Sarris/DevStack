import { motion } from "framer-motion";
import { techStacks } from "../data/content";

function TechMarquee() {
  return (
    <section className="w-full py-8 overflow-hidden relative flex items-center border-y border-white/5 bg-white/5 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
      <motion.div
        className="flex items-center gap-10 md:gap-16 whitespace-nowrap px-8"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
      >
        {[...techStacks, ...techStacks].map((tech, idx) => (
          <img
            key={idx}
            src={tech.src}
            alt={tech.alt}
            className="h-8 md:h-10 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default TechMarquee;
