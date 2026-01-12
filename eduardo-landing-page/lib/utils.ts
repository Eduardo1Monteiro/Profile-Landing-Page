import { prisma } from './prisma';

interface Project {
  id: string,
  title: string,
  slug: string,
  description: string,
  imageUrl: string | null,
  githubUrl: string | null,
  liveUrl: string | null,
  tags: string[],
  pinned: boolean,
  createdAt: Date,
  updatedAt: Date,
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await prisma.project.findMany({
      orderBy: [
        { pinned: 'desc' },
        { createdAt: 'desc' }
      ]
    });
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: {
        slug: slug,
      },
    });

    return project;
  } catch (error) {
    console.error(`Erro ao buscar projeto com slug ${slug}:`, error);
    return null;
  }
}
