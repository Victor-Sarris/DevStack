import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, UploadCloud, MessageCircle, Sparkles } from "lucide-react";
import { whatsappLink } from "../data/content.js";

const models = [
  {
    id: "1",
    title: "São Miguel Arcanjo.s",
    description:
      "Réplica detalhada da escultura clássica com escudo e espada, ideal para decoração ou arte sacra.",
    url: "https://sketchfab.com/models/cea7631807214295aa081e7b0d7f64a0/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "2",
    title: "São Miguel Arcanjo V2.",
    description: "Modelo decorativo de um anjo em pose de guarda ou ascensão.",
    url: "https://sketchfab.com/models/6a0092e40d1e465f986288583825b529/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "3",
    title: "Estátua de Jesus moderna.",
    description:
      "Reprodução em 3D do famoso monumento brasileiro de braços abertos.",
    url: "https://sketchfab.com/models/5d026aa357dd423e8ead785788387b76/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "4",
    title: "Máscara de Samurai",
    description: "Máscara inspirada nas leis de Bushido.",
    url: "https://sketchfab.com/models/f07d72075d80415da4082fc603e1a101/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "5",
    title: "Protótipo Robótico.",
    description:
      "Vaso decorativo e oco em formato de gato dormindo, perfeito para suculentas ou como porta-objetos.",
    url: "https://sketchfab.com/models/e4cde9b7919c49e7be13446b49e118ff/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "6",
    title: "Autobots e Decepticons simbols",
    description: "Simbolos dos clássicos autobots e decepticons.",
    url: "https://sketchfab.com/models/3daebbc52b4342a7907edfe8d421b1cb/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "7",
    title: "Conjunto de Chaveiros Circulares.",
    description:
      "Três pequenas peças achatadas com uma alça lateral, ideais para serem usadas como chaveiros, etiquetas de identificação.",
    url: "https://sketchfab.com/models/f0e8200bea834f1d904f036fec5035e8/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "8",
    title: "Chaveiro de Rusky Siberiano.",
    description: "Chaveiro personalizado para o uso do dia a dia.",
    url: "https://sketchfab.com/models/d1a39b7d39e94e4684ea4a54e520b2ce/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
  {
    id: "9",
    title: "Suporte decorativo para controle.",
    description: "Pode ser usado para controle de XBOX ou PLAYSTATION",
    url: "https://sketchfab.com/models/3db44875076042ad8bfa3949baffae60/embed?autospin=1&autostart=0&transparent=1&ui_theme=dark",
  },
];

export default function Models3D() {
  return (
    <div className="min-h-screen bg-[#05030a] text-[#f5f3ff] p-4 sm:p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Voltar para o início
          </Link>
        </div>

        {/* Cabeçalho da Página */}
        <div className="flex flex-col mb-10 text-center md:text-left">
          <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-2">
            Portfólio Interativo
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-amber-500">&lt;</span> Modelos 3D{" "}
            <span className="text-amber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base">
            Explore nossos projetos em 3D. Arraste, rotacione e dê zoom para ver
            cada detalhe do projeto.
          </p>

          {/* Tag de aviso no topo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium w-fit mx-auto md:mx-0 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
          >
            <Sparkles size={16} />
            <span>Também imprimimos modelos personalizados sob demanda</span>
          </motion.div>
        </div>

        {/* Grid de Modelos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-[#0a0714]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors shadow-lg group"
            >
              {/* Container do Iframe do Sketchfab */}
              <div className="relative w-full aspect-video bg-[#111] overflow-hidden">
                <iframe
                  title={model.title}
                  src={model.url}
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  className="absolute top-0 left-0 w-full h-full border-none"
                  loading="lazy"
                />
              </div>

              {/* Informações do Modelo */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {model.title}
                </h2>
                <p className="text-sm text-gray-400">{model.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Final Chamativo (Call to Action) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden bg-linear-to-br from-amber-500/10 via-[#0a0714]/80 to-orange-600/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 md:p-14 text-center flex flex-col items-center gap-5 group"
        >
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2 shadow-[0_0_20px_rgba(251,146,60,0.15)]">
            <UploadCloud size={32} className="md:w-10 md:h-10" />
          </div>

          <h2 className="relative text-2xl md:text-4xl font-bold tracking-tight max-w-2xl text-white">
            Tem o seu próprio arquivo 3D?
          </h2>

          <p className="relative text-base md:text-lg text-gray-300 max-w-2xl">
            Não encontrou o que precisava na nossa vitrine? Envie o seu modelo
            (STL, OBJ, STEP) e nós cuidamos de tudo. Imprimimos, fazemos o
            acabamento e entregamos a peça pronta para você.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer external"
            className="relative z-10 mt-3"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(251, 146, 60, 0.55)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-amber-500 text-black text-base font-bold rounded-full shadow-[0_0_15px_rgba(251,146,60,0.5)] hover:bg-amber-400 transition-colors cursor-pointer"
            >
              <MessageCircle size={20} />
              Enviar meu modelo
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
