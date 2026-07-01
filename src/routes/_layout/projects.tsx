import { createFileRoute } from '@tanstack/react-router';

import { Heading, Main, ProjectCard } from '#/components';

export const Route = createFileRoute('/_layout/projects')({
  component: RouteComponent,
});

function RouteComponent() {
  const projects = Array(7).fill(null);

  return (
    <Main>
      <Heading level={1}>Projects</Heading>

      <section className="mt-6 grid items-center gap-6 md:grid-cols-2">
        {projects.map((_, i) => (
          <ProjectCard key={i} title={`Project ${i + 1}`} />
        ))}
      </section>
    </Main>
  );
}
