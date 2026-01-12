import Link from 'next/link';
import { Github, Globe, Pin } from 'lucide-react';

interface ProjectProps {
  data: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    pinned: boolean;
    githubUrl: string | null;
    liveUrl: string | null;
    imageUrl?: string | null;
  }
}

export default function ProjectItem({ data }: ProjectProps) {
  return (
    <article
      className="
        group relative flex flex-col justify-between
        p-6 rounded-xl
        bg-white/5 border border-white/10
        backdrop-blur-sm
        hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]
        transition-all duration-300 ease-in-out
      "
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
            {data.title}
          </h3>

          {data.pinned && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
              <Pin size={12} />
              <span>Destaque</span>
            </div>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {data.description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-black/40 text-slate-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {data.liveUrl && (
            <Link
              href={data.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Globe size={16} />
              Demo Online
            </Link>
          )}

          {data.githubUrl && (
            <Link
              href={data.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors ml-auto"
            >
              <Github size={16} />
              Código
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
