import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";

function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden bg-black">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
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
        <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
          <h1 className="text-white text-5xl font-bold">
            Dev<span className="text-green-500">Stack</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
