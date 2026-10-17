import SlideViewer from "./components/SlideViewer";
import MorphBlob from "./components/MorphBlob";
import ConfettiBackground from "./components/ConfettiBackground";
import heroImg from "./assets/hero.png";
import { ReviewCard } from "./components/ReviewCard";
import { ContactSection } from "./components/ContactSection";
import { TiltedPhotoCarousel } from "./components/TiltedPhotoCarousel";
import explainingFigureImg from "./assets/figure2.png";
import layingFigureImg from "./assets/figureLaying.png";
import figurePhotoImg from "./assets/figurePhoto.png";
import "./App.css";

const project1ImagesMap = import.meta.glob(
  "./assets/slides/project1/*.{png,jpg,jpeg,svg}",
  { eager: true, as: "url" },
);
const project2ImagesMap = import.meta.glob(
  "./assets/slides/project2/*.{png,jpg,jpeg,svg}",
  { eager: true, as: "url" },
);
const project1Images = Object.values(project1ImagesMap);
const project2Images = Object.values(project2ImagesMap);

export default function Hero() {
  return (
    <>
      <section className="bg-texture h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute top-[20px] flex items-top justify-center select-none pointer-events-none z-10">
          <h1 className="text-[clamp(1.5rem,2vw,3rem)] font-black uppercase tracking-tighter text-[var(--text-color)] whitespace-nowrap leading-none">
            ALBERTO BERMEJO MAGARÍN
          </h1>
        </div>
        <div className="absolute inset-0 flex flex-col items-top select-none pointer-events-none z-0">
          <div className="flex overflow-hidden justify-right">
            <div className="animate-marquee flex whitespace-nowrap">
              <h1 className="font-jaro text-[80vh] uppercase text-[#F0D197] whitespace-nowrap leading-[0.70] tracking-tight translate-y-[-0.05em]">
                ALBERTO
              </h1>
              <h1 className="font-jaro text-[80vh] uppercase text-[#F0D197] whitespace-nowrap leading-[0.70] tracking-tight translate-y-[-0.05em]">
                ALBERTO
              </h1>
              <h1 className="font-jaro text-[80vh] uppercase text-[#F0D197] whitespace-nowrap leading-[0.70] tracking-tight translate-y-[-0.05em]">
                ALBERTO
              </h1>
            </div>
          </div>
          <h1 className="font-jaro text-[60vh] uppercase text-[#F0D197] whitespace-nowrap leading-[0.70] tracking-tight translate-y-[-0.05em]">
            <div className="flex overflow-hidden justify-left">
              <div className="animate-marquee-reverse flex whitespace-nowrap">
                BERMEJOMAGARÍN
              </div>
              <div className="animate-marquee-reverse flex whitespace-nowrap">
                BERMEJOMAGARÍN
              </div>
              <div className="animate-marquee-reverse flex whitespace-nowrap">
                BERMEJOMAGARÍN
              </div>
              <div className="animate-marquee-reverse flex whitespace-nowrap">
                BERMEJOMAGARÍN
              </div>
            </div>
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center items-end pointer-events-none">
          <div className="w-auto flex justify-center items-end">
            <img
              src={heroImg}
              alt="Alberto Bermejo Magarín"
              className="
              h-[90vh] max-w-[700px]
              md:h-[75vh] md:min-h-[300px] md:max-h-[90vh] md:max-w-[85vw] md:pb-0
              w-auto object-contain object-bottom transition-transform duration-500 hover:scale-[1.02]
            "
            />
          </div>
        </div>
        <div
          className="
          absolute animate-[spin_30s_linear_infinite_reverse] left-1/2 -translate-x-1/2 z-10 pointer-events-none
          -bottom-[35%] w-[250vw] h-[110vh] min-w-[340px] min-h-[340px]
          md:-bottom-[80%] md:w-[100vw] md:h-[150vh] md:max-w-[900px] md:max-h-[900px] md:min-w-[320px] md:min-h-[320px]
        "
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="blobCircularPath"
                d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
              />
            </defs>
            <path
              className="hidden md:block"
              fill="#343D70"
              d="M43.7,-68.3C57.8,-58.9,71.2,-48.8,78,-35.2C84.8,-21.7,85,-4.7,80.6,10.1C76.2,25,67.3,37.8,57.8,51.7C48.2,65.6,38.2,80.6,26,80.6C13.8,80.6,-0.5,65.6,-17.3,60.1C-34,54.6,-53.1,58.6,-64.1,52.1C-75,45.6,-77.8,28.6,-80.6,11.4C-83.4,-5.9,-86.3,-23.3,-78.9,-34.6C-71.5,-45.9,-53.8,-51,-38.9,-60.1C-24,-69.2,-12,-82.2,1.4,-84.4C14.8,-86.5,29.5,-77.7,43.7,-68.3Z"
              transform="translate(100 100)"
            />
            <text
              fill="#0B0F19"
              className="text-[7.5px] md:text-[8px]"
              fontFamily="'Fira Code', monospace"
              letterSpacing="0.12em"
            >
              <textPath href="#blobCircularPath" startOffset="0%">
                pip install job_offer • DROP TABLE problems; • git push --force
                #easy • chmod +x my_career.sh •
              </textPath>
            </text>
          </svg>
        </div>
      </section>
      <section className="relative flex flex-col md:flex-row w-full h-auto bg-[#F0D197] text-[#0B0F19] pt-20 px-8 overflow-hidden">
        <ConfettiBackground count={40} />

        <div className="relative md:w-1/2 pb-20 z-10">
          <div className="absolute inset-0 bg-[#F0D197] rounded-3xl blur-md -z-10 opacity-90" />
          <p className="text-2xl md:text-3xl lg:text-5xl relative z-10">
            Welcome to my portfolio!!
            <br /> I'm a software engineer and this is the space I use to show
            you about my interests, projects and experiences, hoping you can get
            to know me better.
          </p>
        </div>
        <div className="relative md:w-1/2 flex justify-center md:justify-end items-end min-h-[300px] z-10">
          <img
            src={explainingFigureImg}
            alt="Alberto's figure"
            className="max-h-[80vh] max-w-[700px] object-contain object-bottom scale-x-[-1] -mb-1 -mt-40"
          />
        </div>
      </section>
      <section className="pt-8 bg-[#0B0F19] text-[#F0DEBA] overflow-hidden">
        <div className="flex justify-center">
          <h2 className="p-2 text-8xl font-bold font-jaro select-none">
            PROJECTS
          </h2>
        </div>
        <div className="flex flex-col md:flex-row w-full items-start py-4">
          <div className="relative z-10 w-full md:w-[70%] p-8">
            <SlideViewer images={project1Images} />
          </div>
          <div className="relative w-full md:w-[30%] md:p-8 px-8 -mt-4">
            <h2 className="relative text-4xl lg:text-4xl md:text-2xl font-bold font-jaro select-none z-10">
              RAG IMPLEMENTATION
            </h2>
            <h3 className="relative text-lg lg:text-lg md:text-xs font-fira-code select-none z-10">
              Python, Databricks, Chroma DB
            </h3>
            <p className="relative mt-4 text-lg lg:text-lg md:text-base z-10">
              Designed and evaluated an enterprise RAG architecture on
              Databricks to reduce LLM hallucinations. Features custom ingestion
              pipelines for complex corporate data, advanced hybrid retrieval
              with re-ranking, and automated evaluation using RAGAS.
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[160%] h-[160%] flex items-center justify-center">
              <MorphBlob
                className="w-full h-full min-w-[750px] min-h-[750px]"
                fill="#343D70"
                duration={12}
                delay={-7}
                variant="reverse"
              />
            </div>
            <a
              href="https://github.com/abmagarin/RAG_10K"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 mt-5 bg-[#F97316] text-[#F0DEBA] font-fira-code text-sm lg:text-sm md:text-xs font-bold rounded-none hover:bg-[#0B0F19] transition-all duration-300 shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Financial information</span>
            </a>
            <a
              href="https://github.com/abmagarin/RAG_Andalucia"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 mt-5 bg-[#F97316] text-[#F0DEBA] font-fira-code text-sm lg:text-sm md:text-xs font-bold rounded-none hover:bg-[#0B0F19] transition-all duration-300 shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Electoral consultation</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full items-start py-4">
          <div className="relative w-full md:w-[30%] p-8">
            <h2 className="relative text-4xl lg:text-4xl md:text-2xl font-bold font-jaro select-none z-10">
              WEB APPLICATION
            </h2>
            <h3 className="relative text-lg lg:text-lg md:text-xs font-fira-code select-none z-10">
              TypeScript, React Native, Firebase
            </h3>
            <p className="relative mt-4 text-lg lg:text-lg md:text-base z-10">
              A mobile web application built to streamline group dining and
              order tracking. Allows users to connect with friends via friend
              codes, set up shared tables and split bill totals automatically.
              Powered by Firebase Cloud Firestore for real-time data sync and
              authentication.
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[160%] h-[160%] flex items-center justify-center">
              <MorphBlob
                className="w-full h-full min-w-[750px] min-h-[750px]"
                fill="#343D70"
                duration={16}
                delay={-9}
                variant="alternate"
              />
            </div>
            <a
              href="https://github.com/abmagarin/100M"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 mt-5 bg-[#F97316] text-[#F0DEBA] font-fira-code text-sm lg:text-sm md:text-xs font-bold rounded-none hover:bg-[#0B0F19] transition-all duration-300 shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>App repository</span>
            </a>
          </div>
          <div className="relative z-10 w-full md:w-[70%] p-8">
            <SlideViewer images={project2Images} />
          </div>
        </div>
      </section>
      <section className="relative w-full pt-20 pb-36 md:pb-70 px-4 md:px-16 bg-[#343D70] min-h-[140vh] md:min-h-[250vh]">
        <div
          className="absolute block md:hidden inset-x-0 top-0 h-[45vh] md:h-[90vh] overflow-hidden pointer-events-none 
         [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]
         [-webkit-mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
        >
          <ConfettiBackground count={10} />
        </div>
        <div
          className="hidden md:block absolute inset-x-0 top-0 h-[45vh] md:h-[90vh] overflow-hidden pointer-events-none 
         [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]
         [-webkit-mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
        >
          <ConfettiBackground count={40} />
        </div>
        <div
          className="absolute z-30 inset-x-0 top-0 h-[45vh] md:h-[90vh] overflow-hidden pointer-events-none 
         [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]
         [-webkit-mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
        >
          <ConfettiBackground count={20} />
        </div>{" "}
        <div className="sticky top-24 w-full flex justify-center pointer-events-none select-none z-0">
          <h1 className="font-jaro text-[26vw] md:text-[20vw] uppercase text-center text-[#F0D197] leading-[0.75] tracking-tight">
            VIP
            <br />
            REVIEWS
          </h1>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-7 md:gap-24 mt-20 px-4 md:px-10">
          <ReviewCard
            className="md:max-w-5xl p-8 self-center"
            content="Don't just take my word for it—hear it directly from the people I've teamed up with."
          />
          <ReviewCard
            className="max-w-xl p-8 self-end"
            rating={0}
            content="I met Alberto at university, where we studied together and worked on numerous projects, including a Hackathon where we ended up as finalists. He is an excellent teammate, a great person, and someone who is always a pleasure to work with."
            author="Francisco Javier – UNIVERSITY CLASSMATE"
          />
          <ReviewCard
            className="max-w-xl p-8 mb-20"
            rating={0}
            content="Alberto is a great teammate; he loves learning and is always eager to improve. I have worked with him on several projects, and he has always delivered on time with solid quality."
            author="Manuel – University classmate"
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 flex justify-center items-end pointer-events-none z-10 [clip-path:inset(0_0_0_0)]">
          <img
            src={layingFigureImg}
            alt="Alberto's figure"
            className="max-h-[60vh] md:max-h-[80vh] -rotate-10 translate-y-[30%] w-auto max-w-[90vw] object-contain object-bottom block"
          />
        </div>
      </section>
      <section className="relative flex flex-col w-full h-auto bg-[#F0D197] text-[#0B0F19] pt-20 overflow-hidden">
        <TiltedPhotoCarousel />
        <div className="absolute bottom-0 right-0 flex items-end justify-end pointer-events-none z-20">
          <img
            src={figurePhotoImg}
            alt="Alberto's figure"
            className="max-h-[50vh] md:max-h-[45vh] w-auto max-w-[50vw] md:max-w-[500px] translate-x-[30%] -translate-y-[20%] object-contain object-bottom block -mb-px"
          />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
