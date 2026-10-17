import React from "react";

export interface ReviewCardProps {
  rating?: number;
  content: string;
  author?: string;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  content,
  author,
  className = "",
}) => {
  return (
    <div
      className={`w-full p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl flex flex-col gap-4 text-left transition-all duration-300 ${className}`}
    >
      {rating !== undefined && (
        <div className="flex items-center gap-0.5 text-[#F97316]">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 fill-current ${
                index < rating ? "text-[#F97316]" : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
        </div>
      )}

      <p className="text-sm md:text-xl sm:text-xl font-medium tracking-wide text-neutral-800  leading-relaxed">
        {content}
      </p>

      {/* Solo se muestra si se pasa la prop author */}
      {author && (
        <span className="text-xs md:text-xs font-semibold tracking-wider text-neutral-600 uppercase mt-auto">
          {author}
        </span>
      )}
    </div>
  );
};
