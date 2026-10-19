// components/LazySketchfab.jsx
import { useInView } from "react-intersection-observer";

export default function LazySketchfab({ modelUrl, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref} className="relative w-full aspect-video bg-[#111]">
      {inView ? (
        <iframe
          title={title}
          src={modelUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          className="absolute top-0 left-0 w-full h-full border-none"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Carregando modelo 3D...
        </div>
      )}
    </div>
  );
}
