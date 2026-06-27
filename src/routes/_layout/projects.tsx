import { createFileRoute } from '@tanstack/react-router';

import { ProjectCard } from '#/features/projects/components/project-card';
import { Main } from '#/shared/components/main';

export const Route = createFileRoute('/_layout/projects')({
  component: RouteComponent,
});

function RouteComponent() {
  const projects = Array(7).fill(null);

  return (
    <Main>
      <h1 className="text-4xl font-bold">Projects</h1>

      <section className="mt-6 grid items-center gap-6 md:grid-cols-2">
        {projects.map((_, i) => (
          <ProjectCard key={i} title={`Project ${i + 1}`} />
        ))}
      </section>
    </Main>
  );
}
