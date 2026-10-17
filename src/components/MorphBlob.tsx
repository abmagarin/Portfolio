import React, { useId } from "react";

interface MorphBlobProps {
  className?: string;
  fill?: string;
  duration?: number; // Duración en segundos (ej: 15)
  delay?: number; // Retraso en segundos (ej: -5)
  variant?: "default" | "reverse" | "alternate"; // Orden de los paths
}

export default function MorphBlob({
  className = "w-64 h-64",
  fill = "#343D70",
  duration = 15,
  delay = 0,
  variant = "default",
}: MorphBlobProps) {
  // Generamos un ID único para evitar colisiones de CSS si hay varios blobs en pantalla
  const rawId = useId();
  const animId = `blob-${rawId.replace(/:/g, "")}`;

  const path1 =
    "M29.7,-51.2C38.3,-46.5,44.8,-38.1,49.4,-28.9C54,-19.8,56.5,-9.9,61.7,3C66.8,15.8,74.5,31.6,70,40.9C65.5,50.3,48.9,53.1,35.2,55.6C21.5,58.2,10.8,60.6,-2.7,65.2C-16.2,69.9,-32.3,76.9,-44.7,73.6C-57,70.2,-65.6,56.5,-66.4,42.5C-67.2,28.5,-60.2,14.3,-59.6,0.4C-58.9,-13.5,-64.5,-27,-63.5,-40.6C-62.5,-54.2,-54.8,-68,-43.1,-70.9C-31.5,-73.9,-15.7,-66.1,-2.6,-61.6C10.6,-57.1,21.1,-56,29.7,-51.2Z";

  const path2 =
    "M43.2,-73.8C57.1,-66.8,70.3,-57.5,75.8,-44.8C81.3,-32.1,79,-16.1,77.2,-1.1C75.3,13.9,73.8,27.8,65.6,35.8C57.5,43.9,42.6,46,30.6,51C18.5,56,9.2,64,-1.4,66.5C-12.1,69,-24.3,66,-38,62C-51.7,57.9,-66.9,52.7,-72.6,42.2C-78.3,31.6,-74.4,15.8,-74,0.3C-73.5,-15.3,-76.4,-30.6,-71.2,-41.9C-66,-53.2,-52.6,-60.5,-39.4,-68C-26.1,-75.4,-13.1,-82.9,0.8,-84.3C14.6,-85.6,29.3,-80.8,43.2,-73.8Z";

  const path3 =
    "M42.1,-71.6C52.1,-67.2,56.1,-50.9,57.9,-37C59.7,-23.1,59.5,-11.5,60.5,0.6C61.6,12.7,63.9,25.5,58.6,33.4C53.3,41.3,40.3,44.4,29.3,47.8C18.2,51.3,9.1,55.1,-3.5,61.3C-16.2,67.4,-32.4,75.9,-40.2,70.5C-48,65.2,-47.3,46.1,-50.4,32C-53.5,18,-60.4,9,-64.7,-2.5C-69,-14,-70.7,-27.9,-66.5,-40C-62.3,-52.1,-52.1,-62.4,-40,-65.6C-27.9,-68.8,-14,-65,1,-66.8C16.1,-68.6,32.1,-76,42.1,-71.6Z";

  const path4 =
    "M27.7,-53.1C35.2,-43.7,40,-34.8,43.4,-26C46.7,-17.3,48.5,-8.6,54.7,3.6C60.8,15.7,71.3,31.5,66.7,38.1C62.1,44.7,42.5,42.1,28.9,46.2C15.2,50.4,7.6,61.2,-1.7,64.1C-10.9,67,-21.9,61.9,-32.5,56C-43.1,50.2,-53.4,43.5,-56,34C-58.6,24.5,-53.5,12.3,-52.7,0.4C-52,-11.4,-55.7,-22.9,-52,-30.4C-48.3,-38,-37.3,-41.7,-27.4,-49.7C-17.5,-57.7,-8.7,-69.9,0.7,-71.2C10.1,-72.4,20.3,-62.5,27.7,-53.1Z";
  // Seleccionar la secuencia según el variant
  let pA = path1,
    pB = path2,
    pC = path3,
    pD = path4;
  if (variant === "reverse") {
    pA = path3;
    pB = path2;
    pC = path4;
    pD = path1;
  } else if (variant === "alternate") {
    pA = path2;
    pB = path4;
    pC = path1;
    pD = path3;
  }

  return (
    <div className={className}>
      <style>{`
        @keyframes ${animId} {
          0%, 100% { d: path("${pA}"); }
          25% { d: path("${pB}"); }
          50% { d: path("${pC}"); }
          75% { d: path("${pD}"); }
        }
        .${animId}-class {
          animation: ${animId} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: ${delay}s;
        }
      `}</style>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={fill}
          transform="translate(100 100)"
          className={`${animId}-class`}
        />
      </svg>
    </div>
  );
}
