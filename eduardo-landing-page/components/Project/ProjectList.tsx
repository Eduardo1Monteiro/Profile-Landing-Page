import ProjectItem from "./ProjectItem";
import { getProjects } from "@/lib/utils";

export default async function ProjectList() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <div className="p-6 text-center border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
        <p className="text-slate-400">Nenhum projeto encontrado no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectItem key={project.id} data={project} />
      ))}
    </div>
  );
}
