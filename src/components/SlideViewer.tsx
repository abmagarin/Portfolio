import { useState, useEffect, useRef, type TouchEvent } from "react";

interface SlideViewerProps {
  images: string[];
}

export default function SlideViewer({ images }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Estado para controlar la visibilidad temporal de las flechas en móviles
  const [showArrows, setShowArrows] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!images || images.length === 0) return null;

  const minSwipeDistance = 40;

  // Función para resetear el temporizador de visibilidad de las flechas
  const triggerArrowVisibility = () => {
    setShowArrows(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Ocultar flechas tras 2.5 segundos de inactividad
    timeoutRef.current = setTimeout(() => {
      setShowArrows(false);
    }, 2500);
  };

  // Mostrar flechas al cargar
  useEffect(() => {
    triggerArrowVisibility();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    triggerArrowVisibility();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    triggerArrowVisibility();
  };

  const handleTouchStart = (e: TouchEvent) => {
    triggerArrowVisibility();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative aspect-video w-full bg-[#0B0F19] overflow-hidden group select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={triggerArrowVisibility} // Si tocan en móvil, vuelven a aparecer
    >
      {/* Contenedor deslizante */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Flechas autodesvanecidas en móvil, hover en desktop */}
      <button
        onClick={prevSlide}
        aria-label="Anterior diapositiva"
        className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-[#0B0F19]/80 text-[#D6B06A] p-2.5 md:p-3 
          transition-opacity duration-500 hover:bg-[#D6B06A] hover:text-[#0B0F19] z-10 rounded-full md:rounded-none
          ${showArrows ? "opacity-100" : "opacity-0"} 
          md:opacity-0 md:group-hover:opacity-100`}
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente diapositiva"
        className={`absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-[#0B0F19]/80 text-[#D6B06A] p-2.5 md:p-3 
          transition-opacity duration-500 hover:bg-[#D6B06A] hover:text-[#0B0F19] z-10 rounded-full md:rounded-none
          ${showArrows ? "opacity-100" : "opacity-0"} 
          md:opacity-0 md:group-hover:opacity-100`}
      >
        ❯
      </button>
    </div>
  );
}
