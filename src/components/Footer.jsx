import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { navLinks, whatsappLink } from "../data/content";
import { scrollToId } from "../lib/scrollTo";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 md:px-10 pt-4">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 md:pt-12 pb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3 max-w-xs mx-auto md:mx-0">
          <div className="flex items-center gap-2">
            <img src={logo} alt="DevStack" className="w-7 h-7 object-contain" />
            <span className="text-lg font-bold tracking-tight">
              &lt;Dev<span className="text-green-500">Stack/&gt;</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Automação, IoT e desenvolvimento web sob medida para transformar
            processos em resultado.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Navegação
          </span>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className="text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Contato
          </span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer external"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-center font-bold text-gray-500 border-t border-white/5 pt-6 pb-2">
        &copy; &lt;DevStack/&gt; {year}. Todos os Direitos Reservados.
      </p>
    </footer>
  );
}

export default Footer;
