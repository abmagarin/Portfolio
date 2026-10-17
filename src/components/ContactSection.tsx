import React, { useState } from "react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "abmagarin04@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col md:flex-row w-full h-auto bg-[#F0D197] text-[#0B0F19] py-20 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Columna Izquierda: Encabezado */}
      <div className="w-full md:w-1/2 flex flex-col justify-between mb-12 md:mb-0">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#343D70]/80">
            Get in touch
          </span>
          <h2 className="font-jaro text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.85] tracking-tight mt-4">
            LET'S WORK
            <br />
            TOGETHER
          </h2>
        </div>

        <p className="text-base sm:text-lg font-medium text-[#0B0F19]/80 max-w-md mt-6 md:mt-12">
          Available for full-time roles, freelance projects, or just a friendly
          chat about tech.
        </p>
      </div>

      {/* Columna Derecha: Enlaces y Acciones */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        {/* Email Box con botón de copiar */}
        <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]/60">
              Email Address
            </span>
            <a
              href={`mailto:${email}`}
              className="text-lg sm:text-xl font-bold hover:underline truncate"
            >
              {email}
            </a>
          </div>
          <button
            onClick={handleCopyEmail}
            className="self-start sm:self-center px-5 py-2.5 rounded-full bg-[#343D70] text-[#F0D197] text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Enlaces Sociales y CV */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/abmagarin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-between group hover:bg-[#343D70] hover:text-[#F0D197] transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="font-bold text-sm tracking-wide">GitHub</span>
            </div>
            <span className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alberto-bermejo-magar%C3%ADn-90174a2b8" // <-- Tu URL de LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-between group hover:bg-[#343D70] hover:text-[#F0D197] transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-bold text-sm tracking-wide">LinkedIn</span>
            </div>
            <span className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download="Alberto_CV.pdf"
            className="p-5 rounded-2xl bg-[#343D70] text-[#F0D197] shadow-md flex items-center justify-between group hover:opacity-90 active:scale-95 transition-all"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 stroke-current stroke-2 fill-none"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="font-bold text-sm tracking-wide">Get CV</span>
            </div>
            <span className="text-xs group-hover:translate-y-0.5 transition-transform">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
