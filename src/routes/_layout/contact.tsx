import { createFileRoute } from '@tanstack/react-router';

import { Heading, Label, Main } from '#/components';

export const Route = createFileRoute('/_layout/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      <Heading level={1}>Contact</Heading>
      <form className="mt-6 flex max-w-min flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="name">Name</Label>
          <input
            className="rounded border px-2 py-1"
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="email">Email</Label>
          <input
            className="rounded border px-2 py-1"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="message">Message</Label>

          <textarea
            id="message"
            className="rounded border px-2 py-1"
            placeholder="Message"
          />
        </div>
      </form>
    </Main>
  );
}
