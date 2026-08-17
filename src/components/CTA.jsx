import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/content";
import { fadeUpVariant, viewportOnce } from "../lib/animations";

function CTA() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 py-12 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUpVariant}
        className="relative overflow-hidden bg-linear-to-br from-purple-500/10 via-black/50 to-blue-600/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 md:p-16 text-center flex flex-col items-center gap-6"
      >
        <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-purple-400 uppercase">
          Vamos conversar
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
          Pronto para automatizar o seu negócio?
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-xl">
          Fale agora com a nossa equipe e descubra como transformar processos
          manuais em sistemas inteligentes.
        </p>
        <a href={whatsappLink} target="_blank" rel="noreferrer external">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(97, 34, 197, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mt-2 px-8 py-4 bg-purple-500 text-black text-base font-bold rounded-full shadow-[0_0_15px_rgba(97, 34, 197, 0.4)] hover:bg-purple-400 transition-colors cursor-pointer"
          >
            <MessageCircle size={20} />
            Fale com um Especialista
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}

export default CTA;
