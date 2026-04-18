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

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center p-4 md:p-10 py-10">
        <div className="w-full max-w-7xl bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden pb-20">
          <section className="relative flex items-center justify-center min-h-screen p-6 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 p-10 text-white w-full"
            >
              <div className="w-full max-w-lg lg:max-w-xl flex justify-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src={heroImg}
                  alt="Ilustração DevStack"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
              <div className="flex flex-col gap-8 max-w-xl w-full">
                <div className="flex items-center gap-6">
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
                    className="w-16 md:w-20 drop-shadow-[0_0_25px_rgba(5,255,80,0.4)]"
                  />
                  <h1 className="text-6xl md:text-7xl font-bold shrink-0 tracking-tight">
                    &lt;Dev<span className="text-green-500">Stack/&gt;</span>
                  </h1>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-center lg:text-left leading-snug">
                  Automatize o seu dia a dia com o nosso serviço.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm font-medium opacity-90 border-l-2 border-green-500 pl-6">
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
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 px-8 py-4 bg-green-500 text-white font-bold rounded-full w-max shadow-[0_0_15px_rgba(5,255,80,0.3)] hover:bg-green-400 transition-colors mx-auto lg:mx-0"
                >
                  Fale com um Especialista
                </motion.button>
              </div>
            </motion.div>
          </section>
          <section className="py-16 px-6 max-w-5xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full cursor-pointer p-10"
            >
              <h2 className="text-4xl font-bold mb-6 border-b border-green-500/30 pb-4">
                &lt; Mais Sobre Nós /&gt;
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A DevStack nasceu da necessidade de otimizar processos
                repetitivos e transformar ideias complexas em sistemas ágeis.
                Nosso foco principal é utilizar tecnologias modernas e
                arquiteturas escaláveis para entregar não apenas código, mas sim
                tempo e produtividade para os nossos clientes.
              </p>
            </motion.div>
          </section>
          <section className="py-24 px-6 max-w-5xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full cursor-pointer p-10"
            >
              <h2 className="text-4xl font-bold mb-6 border-b border-green-500/30 pb-4">
                &lt; O que queremos mudar /&gt;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    Eliminar o Trabalho Manual
                  </h3>
                  <p className="text-gray-400">
                    Automatizando tarefas repetitivas para que humanos possam
                    focar no que realmente importa: estratégia e criatividade.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    Acessibilidade Tecnológica
                  </h3>
                  <p className="text-gray-400">
                    Levar soluções de automação e IoT, antes restritas a grandes
                    corporações, para negócios de todos os tamanhos.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
          {/* --- SEÇÃO 4: PROJETOS JÁ DESENVOLVIDOS --- */}
          <section className="py-24 px-6 max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
            >
              <h2 className="text-4xl font-bold mb-10 text-center">
                &lt; Projetos Já Desenvolvidos /&gt;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.4)",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col h-full cursor-pointer"
                >
                  <span className="text-xs font-bold text-green-500 tracking-wider mb-2">
                    FULLSTACK
                  </span>
                  <h3 className="text-2xl font-bold mb-4">ResourceFlow</h3>
                  <p className="text-gray-400 mb-6 grow">
                    Sistema de gestão e agendamento de recursos focado em
                    escalabilidade e controle eficiente.
                  </p>
                  <div className="flex gap-2 opacity-70 text-sm">
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
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col h-full cursor-pointer"
                >
                  <span className="text-xs font-bold text-green-500 tracking-wider mb-2">
                    IOT & EMBARCADOS
                  </span>
                  <h3 className="text-2xl font-bold mb-4">AC-Controller</h3>
                  <p className="text-gray-400 mb-6 grow">
                    Sistema inteligente de controle de ar-condicionado
                    utilizando hardware embarcado e comunicação via rede.
                  </p>
                  <div className="flex gap-2 opacity-70 text-sm">
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
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col h-full cursor-pointer"
                >
                  <span className="text-xs font-bold text-green-500 tracking-wider mb-2">
                    VISÃO COMPUTACIONAL
                  </span>
                  <h3 className="text-2xl font-bold mb-4">
                    Totem de Reconhecimento
                  </h3>
                  <p className="text-gray-400 mb-6 grow">
                    Controle de acesso seguro e automatizado utilizando
                    reconhecimento facial, visão computacional e IoT.
                  </p>
                  <div className="flex gap-2 opacity-70 text-sm flex-wrap">
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
          <section className="py-24 px-6 max-w-5xl mx-auto w-full mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col h-full cursor-pointer p-10 text-center"
            >
              <h2 className="text-4xl font-bold mb-12">&lt; Equipe /&gt;</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <img
                        src={philipeImg}
                        alt=""
                        className="w-25 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Philipe</h3>
                  <p className="text-green-400 font-bold tracking-wider text-xs mt-1 mb-3">
                    DESENVOLVEDOR
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Desenvolvedor Júnior com foco em aprendizagem e construir
                    ideias inovadoras.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <img
                        src={victorImg}
                        alt=""
                        className="w-25 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Victor Sarrís</h3>
                  <p className="text-green-400 font-bold tracking-wider text-xs mt-1 mb-3">
                    CRIADOR E LEAD DEVELOPER
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Desenvolvedor Fullstack com grande foco em IoT, Sistemas
                    Embarcados e Web. Transformando ideias em soluções reais.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <img src={joaoImg} alt="" className="w-25 rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Ana Beatriz</h3>
                  <p className="text-green-400 font-bold tracking-wider text-xs mt-1 mb-3">
                    DESENVOLVEDOR
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Desenvolvedor hábil e prático com foco na concretização de
                    ideias.
                  </p>
                </div>
                {/* <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <img src={biaImg} alt="" className="w-25 rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Adeandro Pereira</h3>
                  <p className="text-green-400 font-bold tracking-wider text-xs mt-1 mb-3">
                    ADVOGADA ESPECIALIZADA
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Advogada especializada com foco em soluções jurídicas
                    estratégicas e seguras.
                  </p>
                </div> */}
                {/* <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-tr from-green-500 to-blue-600 p-1 mb-4 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <img
                        src={adeandroImg}
                        alt=""
                        className="w-25 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">João Vitor</h3>
                  <p className="text-green-400 font-bold tracking-wider text-xs mt-1 mb-3">
                    ADMINISTRADOR LEGAL
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    Administrador legal responsável pela organização, gestão
                    documental e suporte jurídico-administrativo.
                  </p>
                </div> */}
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
