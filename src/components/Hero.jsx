import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import heroImg from "../assets/logo.png";
import { whatsappLink } from "../data/content";
import { fadeUpVariant } from "../lib/animations";
import { scrollToId } from "../lib/scrollTo";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen p-4 md:p-6 w-full"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 p-4 sm:p-6 md:p-10 text-white w-full"
      >
        <div className="w-full max-w-[16rem] sm:max-w-xs md:max-w-lg lg:max-w-xl flex justify-center mt-6 lg:mt-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={heroImg}
            alt="Ilustração DevStack"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl w-full text-center lg:text-left items-center lg:items-start">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs md:text-sm font-bold tracking-wide"
          >
            <Sparkles size={14} />
            Automação &bull; IoT &bull; Web
          </motion.span>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={heroImg}
              alt="Ícone 3D"
              className="w-12 sm:w-16 md:w-20 drop-shadow-[0_0_25px_rgba(5,255,80,0.4)]"
            />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold shrink-0 tracking-tight">
              &lt;Dev<span className="text-cyan-500">Stack/&gt;</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Automatize o seu dia a dia com o nosso serviço.
          </p>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-xs sm:text-sm font-medium opacity-90 border-t-2 lg:border-t-0 lg:border-l-2 border-purple-500 pt-4 lg:pt-0 lg:pl-6">
            <motion.li whileHover={{ x: 5 }} className="cursor-default">
              Scripts Automatizados
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="cursor-default">
              Sistemas Inteligentes
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="cursor-default">
              Integração de APIs
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="cursor-default">
              Soluções Sob Medida
            </motion.li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href={whatsappLink}
              className="decoration-0 cursor-pointer"
              target="_blank"
              rel="noreferrer external"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(97, 34, 197, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-black text-sm sm:text-base font-bold rounded-full w-max shadow-[0_0_15px_rgba(97, 34, 197, 0.3)] hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                <MessageCircle size={18} />
                Fale com um Especialista
              </motion.button>
            </a>
            <button
              type="button"
              onClick={() => scrollToId("projetos")}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white text-sm sm:text-base font-bold rounded-full w-max hover:bg-white/10 hover:border-white/40 transition-colors cursor-pointer"
            >
              Ver Projetos
            </button>
          </div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollToId("sobre")}
        aria-label="Rolar para a próxima seção"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Explorar</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}

export default Hero;
