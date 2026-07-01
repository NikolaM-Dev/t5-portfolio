import { Anchor, Heading } from '#/components';

type ProjectCardProps = {
  title: string;
};

export function ProjectCard(props: ProjectCardProps): React.JSX.Element {
  const { title } = props;

  return (
    <article className="flex max-w-sm flex-col rounded border border-flexoki-600 md:max-w-md">
      <header className="border-b border-flexoki-600 p-4">
        <Heading level={2}>{title}</Heading>
      </header>

      <main className="p-4">
        <div className="flex justify-center">
          <img
            alt={`${title} Demo`}
            className="rounded"
            src="https://placehold.co/600x400"
          />
        </div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          quidem, dignissimos cupiditate esse quibusdam voluptate iste obcaecati
          temporibus rerum. Natus tenetur id voluptatibus similique cumque sed
          neque ullam debitis aut?
        </p>
      </main>

      <footer className="border-t border-flexoki-600 p-4 text-end">
        <Anchor href="https://github.com">GitHub ↗️</Anchor>
      </footer>
    </article>
  );
}
