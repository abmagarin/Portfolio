// src/components/Preloader.tsx
import React, { useEffect, useState } from "react";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Pequeño margen para asegurar que el navegador haya pintado las fuentes e imágenes
      setTimeout(() => {
        setIsLoading(false);
        // Desmontar del DOM una vez termine la animación de fade-out (700ms)
        setTimeout(() => setShouldRender(false), 700);
      }, 500);
    };

    // Si la página ya cargó antes de montar el componente
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#343D70] transition-opacity duration-700 ease-out pointer-events-none ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Título o logotipo */}
        <h2 className="font-jaro text-5xl md:text-7xl uppercase text-[#F0D197] tracking-wider animate-pulse">
          Loading...
        </h2>

        {/* Barra de progreso animada */}
        <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#F0D197] rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
