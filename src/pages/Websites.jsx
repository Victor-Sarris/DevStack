import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  MonitorSmartphone,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce de Moda",
    description:
      "Loja virtual completa com integração de pagamento e painel administrativo.",
    techs: ["React", "Node.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    url: "https://exemplo.com",
  },
  {
    id: 2,
    title: "Dashboard Financeiro",
    description:
      "Painel de controle para gestão de finanças pessoais com gráficos interativos.",
    techs: ["Next.js", "TypeScript", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    url: "https://exemplo.com",
  },
  {
    id: 3,
    title: "Landing Page para Startup",
    description:
      "Página de captura de leads focada em alta conversão e performance.",
    techs: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    url: "https://exemplo.com",
  },
];

export default function Websites() {
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

        {/* Cabeçalho */}
        <div className="flex flex-col mb-10 text-center md:text-left">
          <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-2">
            Nosso Portfólio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-amber-500">&lt;</span> Projetos Web{" "}
            <span className="text-amber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base">
            Conheça alguns dos sites e sistemas que já tiramos do papel.
            Soluções modernas, rápidas e focadas em resultados.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-[#0a0714]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors shadow-lg group"
            >
              {/* Imagem do Projeto */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#111]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] to-transparent opacity-80" />
              </div>

              {/* Informações */}
              <div className="p-6 flex flex-col grow">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 grow">
                  {project.description}
                </p>

                {/* Tags de Tecnologia */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botão de Acessar Site */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-between w-full px-4 py-3 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 rounded-xl text-sm font-bold transition-all duration-300 group/btn"
                >
                  <span>Visitar o site</span>
                  <ExternalLink
                    size={18}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
