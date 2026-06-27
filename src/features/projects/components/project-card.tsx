type ProjectCardProps = {
  title: string;
};

export function ProjectCard(props: ProjectCardProps): React.JSX.Element {
  const { title } = props;

  return (
    <article className="flex max-w-sm flex-col rounded border md:max-w-md">
      <header className="border-b p-4">
        <h2 className="text-center text-3xl font-bold">{title}</h2>
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

      <footer className="border-t p-4 text-end">
        <a
          className="text-purple-800 underline decoration-solid"
          href="https://github.com"
        >
          GitHub ↗️
        </a>
      </footer>
    </article>
  );
}
