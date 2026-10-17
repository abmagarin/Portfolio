import React from "react";

// Importamos todas tus imágenes de la carpeta assets/pictures
const imageModules = import.meta.glob<{ default: string }>(
  "../assets/pictures/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);

const defaultImages = Object.values(imageModules).map((mod) => mod.default);

// Patrón de inclinación sutil y oscilaciones verticales
const tilts = [
  "rotate-2 translate-y-1",
  "-rotate-2 -translate-y-2",
  "rotate-3 translate-y-2",
  "-rotate-1 translate-y-0",
  "rotate-[1.5deg] -translate-y-1",
  "-rotate-[3deg] translate-y-3",
  "rotate-1 translate-y-2",
  "-rotate-[2.5deg] -translate-y-1",
];

export const TiltedPhotoCarousel: React.FC = () => {
  const images = defaultImages;

  if (!images || images.length === 0) return null;

  // Duplicamos el array para que el bucle continuo del marquee no tenga cortes visuales
  const doubleImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full py-12 overflow-hidden select-none cursor-grab active:cursor-grabbing">
      {/* Sombra de desvanecimiento a los lados para suavizar la entrada y salida de las fotos */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-36 bg-gradient-to-r from-[#F0D197] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-36 bg-gradient-to-l from-[#F0D197] to-transparent z-10 pointer-events-none" />

      {/* Contenedor del Marquee Infinito */}
      <div className="flex w-max gap-6 md:gap-8 animate-marquee px-4 items-center">
        {doubleImages.map((src, index) => {
          const tiltClass = tilts[index % tilts.length];

          return (
            <div
              key={index}
              className={`flex-shrink-0 h-[340px] sm:h-[400px] md:h-[480px] w-auto
                overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-xl
                transition-transform duration-500 hover:scale-105 hover:rotate-0 hover:z-20
                ${tiltClass}`}
            >
              <img
                src={src}
                alt={`Snapshot ${index + 1}`}
                className="h-full w-auto max-w-none object-contain pointer-events-none rounded-3xl md:rounded-[2.5rem]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
