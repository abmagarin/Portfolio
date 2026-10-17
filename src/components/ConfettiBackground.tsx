import { useMemo } from "react";

interface ConfettiBackgroundProps {
  count?: number;
  colors?: string[];
}

const DEFAULT_COLORS = ["#455092", "#F97316"];

export default function ConfettiBackground({
  count = 25,
  colors = DEFAULT_COLORS,
}: ConfettiBackgroundProps) {
  const dots = useMemo(() => {
    // Si pasas un array vacío por error, usamos los colores por defecto para evitar undefined
    const palette = colors.length > 0 ? colors : DEFAULT_COLORS;

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.floor(Math.random() * 12) + 8}px`,
      height: `${Math.floor(Math.random() * 16) + 10}px`,
      color: palette[Math.floor(Math.random() * palette.length)],
      rotate: `${Math.floor(Math.random() * 360)}deg`,
      blur: "blur-[2px]",
      opacity: Math.random() * 0.5 + 0.5,
    }));
  }, [count, colors]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-sm ${dot.blur}`}
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.width,
            height: dot.height,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            transform: `rotate(${dot.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
