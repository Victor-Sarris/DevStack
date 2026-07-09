import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, whatsappLink } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { scrollToId } from "../lib/scrollTo";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  const activeId = useScrollSpy(navLinks.map((link) => link.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleNavClick(id) {
    setMenuOpen(false);
    scrollToId(id);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-[3px] bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 origin-left"
        style={{ scaleX: progress }}
      />
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="Voltar ao topo"
          >
            <img
              src={logo}
              alt="DevStack"
              className="w-8 h-8 md:w-9 md:h-9 object-contain drop-shadow-[0_0_12px_rgba(5,255,80,0.4)] group-hover:scale-110 transition-transform"
            />
            <span className="text-lg md:text-xl font-bold tracking-tight">
              &lt;Dev<span className="text-green-500">Stack/&gt;</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors ${
                  activeId === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href={whatsappLink} target="_blank" rel="noreferrer external">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-green-500 text-black text-sm font-bold rounded-full shadow-[0_0_15px_rgba(5,255,80,0.3)] hover:bg-green-400 transition-colors cursor-pointer"
              >
                Fale Conosco
              </motion.button>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white cursor-pointer"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-black/90 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-6 flex flex-col gap-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-colors ${
                  activeId === link.id
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer external"
              onClick={() => setMenuOpen(false)}
              className="mt-2"
            >
              <button
                type="button"
                className="w-full px-5 py-3 bg-green-500 text-black text-base font-bold rounded-xl hover:bg-green-400 transition-colors cursor-pointer"
              >
                Fale Conosco
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
