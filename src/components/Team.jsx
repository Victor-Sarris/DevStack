import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { team } from "../data/content";
import { staggerContainer, staggerItem, viewportOnce } from "../lib/animations";

function Team() {
  return (
    <section id="equipe" className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full mb-4 md:mb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full p-6 sm:p-8 md:p-10 text-center"
      >
        <SectionHeading kicker="Quem constrói" title="Equipe" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className={`flex flex-col items-center ${
                idx === team.length - 1 && team.length % 3 !== 0
                  ? "sm:col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20"
              >
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
              <p className="text-green-400 font-bold tracking-wider text-[10px] md:text-xs mt-1 mb-3 uppercase">
                {member.role}
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[14rem] md:max-w-xs">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Team;
