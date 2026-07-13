import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import { ProjectDetail } from '@/components/sections/ProjectDetail';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} — Alex Chen`,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />;
}
