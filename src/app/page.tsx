


  const tools = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "PyTorch",
  "NumPy",
  "Pandas",
  "Flask",
  "SQL",
  "Git",
  "Figma",
  "NVIDIA NeMo",
];

const projects = [
  {
    module: "MODULE 01",
    title: "Speaker Diarization System",
    type: "Machine Learning / Speech AI",
    stack: "Python | NeMo | PyTorch",
    description:
      "A speech processing pipeline focused on identifying and separating speakers in multi-speaker audio environments.",
  },
  {
    module: "MODULE 02",
    title: "Wayfinder AI Travel Planner",
    type: "Full Stack / AI Integration",
    stack: "React | Flask | Gemini API",
    description:
      "An AI-powered itinerary planner that generates personalized travel plans based on personality, budget, and destination.",
  },
  {
    module: "MODULE 03",
    title: "Data Structures Systems",
    type: "Software Engineering",
    stack: "Java | Algorithms | OOP",
    description:
      "Implementations of core data structures including sorted sets, linked lists, trees, graphs, and algorithmic systems.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090B10] text-[#E6F1FF]">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#090B10]/80 px-8 py-4 backdrop-blur-md">
        <p className="font-mono text-sm tracking-widest text-[#00E5FF]">
          AYAH // PORTFOLIO SYSTEM
        </p>

        <div className="hidden gap-6 font-mono text-xs text-[#8FA3BF] md:flex">
          <a href="#about" className="hover:text-[#FF4FA3]">ABOUT</a>
          <a href="#projects" className="hover:text-[#FF4FA3]">PROJECTS</a>
          <a href="#tools" className="hover:text-[#FF4FA3]">TOOLS</a>
          <a href="#hardware" className="hover:text-[#FF4FA3]">HARDWARE</a>
          <a href="#contact" className="hover:text-[#FF4FA3]">CONTACT</a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center px-8 pt-24 md:px-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,79,163,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid w-full gap-12 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="mb-5 font-mono text-sm text-[#00E5FF]">
              // INITIALIZING PORTFOLIO SYSTEM
            </p>

            <h1 className="max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
              AYAH H.
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-[#8FA3BF] md:text-2xl">
              AI • Speech Processing • Computational Systems
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#8FA3BF]">
              Building intelligent systems at the intersection of machine
              learning, software engineering, and computational science.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#FF4FA3] px-6 py-3 font-mono text-sm text-white shadow-[0_0_30px_rgba(255,79,163,0.45)]"
              >
                VIEW PROJECTS
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#00E5FF]/50 px-6 py-3 font-mono text-sm text-[#00E5FF]"
              >
                RESEARCH PROFILE
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#111823]/70 p-6 shadow-[0_0_40px_rgba(0,229,255,0.12)] backdrop-blur-md">
            <p className="mb-4 font-mono text-sm text-[#FF4FA3]">
              SYSTEM STATUS
            </p>

            {[
              ["Neural Models", "ACTIVE"],
              ["Research Modules", "LOADING"],
              ["Signal Processing", "RUNNING"],
              ["Portfolio State", "ONLINE"],
            ].map(([label, status]) => (
              <div
                key={label}
                className="flex justify-between border-b border-white/10 py-3 font-mono text-sm"
              >
                <span className="text-[#8FA3BF]">{label}</span>
                <span className="text-[#00E5FF]">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-28 md:px-20">
        <p className="font-mono text-sm text-[#00E5FF]">// MODULE 02</p>
        <h2 className="mt-3 text-4xl font-bold">Research Profile</h2>

        <p className="mt-6 max-w-3xl leading-8 text-[#8FA3BF]">
          I’m interested in building AI systems that connect software,
          perception, and real-world data. My work spans machine learning,
          speech processing, robotics, and computational science, with a growing
          interest in biotech and biological signal analysis.
        </p>
      </section>

      <section id="projects" className="px-8 py-28 md:px-20">
        <p className="font-mono text-sm text-[#00E5FF]">// MODULE 03</p>
        <h2 className="mt-3 text-4xl font-bold">Featured Projects</h2>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-[#111823] p-6 transition hover:-translate-y-1 hover:border-[#FF4FA3]/50 hover:shadow-[0_0_35px_rgba(255,79,163,0.18)]"
            >
              <p className="font-mono text-xs text-[#FF4FA3]">
                {project.module}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 font-mono text-xs text-[#00E5FF]">
                TYPE: {project.type}
              </p>
              <p className="mt-1 font-mono text-xs text-[#8FA3BF]">
                STACK: {project.stack}
              </p>
              <p className="mt-5 max-w-3xl text-[#8FA3BF]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="px-8 py-28 md:px-20">
        <p className="font-mono text-sm text-[#00E5FF]">// MODULE 04</p>
        <h2 className="mt-3 text-4xl font-bold">Active Toolchain</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#00E5FF]/30 px-4 py-2 font-mono text-sm text-[#E6F1FF] transition hover:border-[#FF4FA3] hover:text-[#FF4FA3]"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="hardware" className="px-8 py-28 md:px-20">
        <p className="font-mono text-sm text-[#00E5FF]">// MODULE 05</p>
        <h2 className="mt-3 text-4xl font-bold">Compute Environment</h2>

        <div className="mt-8 max-w-3xl rounded-2xl border border-[#FF4FA3]/20 bg-[#111823] p-6 font-mono shadow-[0_0_35px_rgba(255,79,163,0.12)]">
          {[
            ["CPU", "AMD Ryzen 5 7600"],
            ["GPU", "Radeon RX 7600 XT"],
            ["STORAGE", "2TB NVMe SSD"],
            ["USE CASE", "ML experimentation / development / rendering"],
            ["STATUS", "OPERATIONAL"],
          ].map(([label, value]) => (
            <div key={label} className="flex border-b border-white/10 py-3">
              <span className="w-32 text-[#8FA3BF]">{label}</span>
              <span className="text-[#E6F1FF]">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 py-28 md:px-20">
        <p className="font-mono text-sm text-[#00E5FF]">// FINAL MODULE</p>
        <h2 className="mt-3 text-4xl font-bold">Connect</h2>

        <p className="mt-6 max-w-xl text-[#8FA3BF]">
          Interested in AI, software engineering, computational science, or
          research-driven systems? Let’s connect.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
          <a className="text-[#00E5FF] hover:text-[#FF4FA3]" href="#">
            GitHub
          </a>
          <a className="text-[#00E5FF] hover:text-[#FF4FA3]" href="#">
            LinkedIn
          </a>
          <a className="text-[#00E5FF] hover:text-[#FF4FA3]" href="#">
            Resume
          </a>
          <a className="text-[#00E5FF] hover:text-[#FF4FA3]" href="#">
            Email
          </a>
        </div>
      </section>
    </main>
  );
}
