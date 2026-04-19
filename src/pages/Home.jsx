import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { motion } from "framer-motion"; // ta sendo usado sim
import heroImg from "../assets/logo.png";

// imagens da equipe
// import adeandroImg from "../assets/team/Adeandro.jpg";
// import biaImg from "../assets/team/Bia.png";
import joaoImg from "../assets/team/Joao.jpg";
import philipeImg from "../assets/team/Philipe.png";
import victorImg from "../assets/team/victor.jpg";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// --- ARRAY DE STACKS ---
const techStacks = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "react",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg",
    alt: "aws",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    alt: "android",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    alt: "androidstudio",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    alt: "angularjs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    alt: "blender",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    alt: "c",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "docker",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    alt: "django",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    alt: "trello",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    alt: "tailwindcss",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "postgresql",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "nodejs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "mongodb",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    alt: "lua",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
    alt: "latex",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    alt: "jupyter",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "java",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    alt: "ionic",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "html5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "figma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "css",
  },
];

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1}
            cAzimuthAngle={-350}
            cDistance={3.09}
            cPolarAngle={60}
            cameraZoom={0.99}
            color1="#05ff50"
            color2="#4939db"
            color3="#104534"
            destination="onCanvas"
            embedMode="off"
            envPreset="dawn"
            format="gif"
            fov={60}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="env"
            pixelDensity={1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="enabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.2}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="plane"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.2}
            uStrength={13}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center p-3 sm:p-4 md:p-10 py-10">
        {/* Container Principal: Reduzido o border-radius no mobile para ganhar espaço de tela */}
        <div className="w-full max-w-7xl bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden pb-12 md:pb-20">
          <section className="relative flex items-center justify-center min-h-screen p-4 md:p-6 w-full">
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
                  {/* Fonte reduzida no mobile para evitar quebra de linha estranha */}
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold shrink-0 tracking-tight">
                    &lt;Dev<span className="text-green-500">Stack/&gt;</span>
                  </h1>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                  Automatize o seu dia a dia com o nosso serviço.
                </p>
                <ul className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-xs sm:text-sm font-medium opacity-90 border-t-2 lg:border-t-0 lg:border-l-2 border-green-500 pt-4 lg:pt-0 lg:pl-6">
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
                <a
                  href="https://wa.me/558994072096?text=Olá!%20Vim%20pelo%20site%20da%20DevStack%20e%20gostaria%20de%20falar%20com%20um%20especialista."
                  className="decoration-0 cursor-pointer"
                  target="blank"
                  rel="external"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white text-sm sm:text-base font-bold rounded-full w-max shadow-[0_0_15px_rgba(5,255,80,0.3)] hover:bg-green-400 transition-colors cursor-pointer"
                  >
                    Fale com um Especialista
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </section>

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

          <section className="py-12 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full cursor-pointer p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 border-b border-green-500/30 pb-4 text-center md:text-left">
                &lt; Mais Sobre Nós /&gt;
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left">
                A DevStack nasceu da necessidade de otimizar processos
                repetitivos e transformar ideias complexas em sistemas ágeis.
                Nosso foco principal é utilizar tecnologias modernas e
                arquiteturas escaláveis para entregar não apenas código, mas sim
                tempo e produtividade para os nossos clientes.
              </p>
            </motion.div>
          </section>

          <section className="py-12 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full cursor-pointer p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 border-b border-green-500/30 pb-4 text-center md:text-left">
                &lt; O que queremos mudar /&gt;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 md:mt-8">
                <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">
                    Eliminar o Trabalho Manual
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Automatizando tarefas repetitivas para que nossos clientes
                    possam focar no que realmente importa:{" "}
                    <span className="font-bold">estratégia e criatividade</span>
                    .
                  </p>
                </div>
                <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">
                    Acessibilidade Tecnológica
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Levar soluções de automação, IoT, Sistemas de Gestão e
                    controle automáticos na palma da sua mão.{" "}
                    <span className="font-bold">
                      Antes restritas a grandes corporações, para negócios de
                      todos os tamanhos.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* --- SEÇÃO 4: PROJETOS JÁ DESENVOLVIDOS --- */}
          <section className="py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
                &lt; Projetos Desenvolvidos /&gt;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.4)",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full cursor-pointer"
                >
                  <span className="text-[10px] md:text-xs font-bold text-green-500 tracking-wider mb-2">
                    FULLSTACK
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    ResourceFlow
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-6 grow">
                    Sistema de gestão e agendamento de recursos focado em
                    escalabilidade e controle eficiente.
                  </p>
                  <div className="flex gap-2 opacity-70 text-xs md:text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      Node.js
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      React
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.4)",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full cursor-pointer"
                >
                  <span className="text-[10px] md:text-xs font-bold text-green-500 tracking-wider mb-2">
                    IOT & EMBARCADOS
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    AC-Controller
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-6 grow">
                    Sistema inteligente de controle de ar-condicionado
                    utilizando hardware embarcado e comunicação via rede.
                  </p>
                  <div className="flex gap-2 opacity-70 text-xs md:text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      C++
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      ESP32
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.4)",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full cursor-pointer"
                >
                  <span className="text-[10px] md:text-xs font-bold text-green-500 tracking-wider mb-2">
                    VISÃO COMPUTACIONAL
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Totem Reconhecimento
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-6 grow">
                    Controle de acesso seguro e automatizado utilizando
                    reconhecimento facial, visão computacional e IoT.
                  </p>
                  <div className="flex gap-2 opacity-70 text-xs md:text-sm flex-wrap">
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      Python
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      OpenCV
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section className="py-12 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full mb-12 md:mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full cursor-pointer p-6 sm:p-8 md:p-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
                &lt; Equipe /&gt;
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={philipeImg}
                        alt="Philipe"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Philipe</h3>
                  <p className="text-green-400 font-bold tracking-wider text-[10px] md:text-xs mt-1 mb-3">
                    DESENVOLVEDOR
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[14rem] md:max-w-xs">
                    Desenvolvedor Júnior com foco em aprendizagem e construir
                    ideias inovadoras.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={victorImg}
                        alt="Victor Sarrís"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    Victor Sarrís
                  </h3>
                  <p className="text-green-400 font-bold tracking-wider text-[10px] md:text-xs mt-1 mb-3">
                    CRIADOR E LEAD DEVELOPER
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[14rem] md:max-w-xs">
                    Desenvolvedor Fullstack com grande foco em IoT, Sistemas
                    Embarcados e Web. Transformando ideias em soluções reais.
                  </p>
                </div>
                <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={joaoImg}
                        alt="João Vitor Fialho"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    João Vitor Fialho
                  </h3>
                  <p className="text-green-400 font-bold tracking-wider text-[10px] md:text-xs mt-1 mb-3">
                    DESENVOLVEDOR
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[14rem] md:max-w-xs">
                    Desenvolvedor hábil e prático com foco na concretização de
                    ideias.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          <footer className="text-xs sm:text-sm md:text-[15px] text-center font-bold text-gray-400">
            &copy; &lt;DevStack/&gt; 2026. Todos os Direitos Reservados.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
