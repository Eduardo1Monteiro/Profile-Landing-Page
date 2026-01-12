import { Suspense } from "react";
import ProjectList from "@/components/Project/ProjectList";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "CSS",
  "PostgreSQL",
  "Prisma",
  "C"
];

export default function Home() {
  return (
    <main className="flex flex-col gap-16 min-h-screen w-full px-6 pt-24 pb-20 max-w-5xl mx-auto">

      {/* --- SOBRE MIM --- */}
      <section id="sobre-mim" className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight">
          Me chamo{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Eduardo Monteiro
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
          Sou desenvolvedor web e estudante de Sistemas de Informação na
          Universidade Federal de Sergipe.
          <br className="hidden md:block" />
          Na universidade, atuo não somente como aluno, mas também como
          pesquisador em projetos de iniciação científica.
          <br className="hidden md:block" />
          Durante meu tempo de estudo, desenvolvi desde projetos de baixo nível,
          como simuladores de CPU, até aplicações web como esta.
        </p>
      </section>

      {/* --- TECH STACK --- */}
      <section id="tech-stack" className="flex flex-col gap-8">
        <div className="h-px w-full bg-gradient-to-r from-purple-500/50 via-purple-500/10 to-transparent"></div>

        <h2 className="font-bold text-3xl md:text-3xl text-white">
          Tecnologias
        </h2>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="
                px-4 py-2 rounded-lg 
                bg-white/5 border border-white/10 
                text-slate-300 text-sm font-medium
                hover:border-purple-500/50 hover:text-purple-300 hover:bg-white/10
                transition-colors cursor-default select-none
              "
            >
              {tech}
            </div>
          ))}
        </div>

      </section>

      {/* --- PROJETOS --- */}
      <section id="projetos" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl md:text-4xl text-white">
            Projetos
          </h2>

          <div className="h-px w-full bg-gradient-to-r from-purple-500/50 via-purple-500/10 to-transparent"></div>
        </div>

        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectList />
        </Suspense>
      </section>
    </main>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="h-64 rounded-xl bg-white/5 border border-white/5 animate-pulse flex flex-col p-6 gap-4"
        >
          <div className="h-6 w-1/2 bg-white/10 rounded"></div>
          <div className="h-4 w-full bg-white/5 rounded"></div>
          <div className="h-4 w-2/3 bg-white/5 rounded"></div>

          <div className="mt-auto flex gap-2">
            <div className="h-6 w-12 bg-white/10 rounded"></div>
            <div className="h-6 w-16 bg-white/10 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
