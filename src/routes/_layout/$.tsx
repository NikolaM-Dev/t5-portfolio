import { createFileRoute } from '@tanstack/react-router';

import { Heading, Main, NLink } from '#/components';

export const Route = createFileRoute('/_layout/$')({
  component: NotFound,
});

function NotFound() {
  return (
    <Main className="container mx-auto text-center">
      <Heading level={1}>404</Heading>
      <p className="mt-4 text-xl text-flexoki-600">Page not found</p>
      <NLink to="/" className="mt-4 inline-block">
        Go home
      </NLink>
    </Main>
  );
}
