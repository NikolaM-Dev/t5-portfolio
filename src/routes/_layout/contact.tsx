import { createFileRoute } from '@tanstack/react-router';

import { Main } from '#/components/main';

export const Route = createFileRoute('/_layout/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      <h1 className="text-4xl font-bold">Contact</h1>
      <form className="mt-6 flex max-w-min flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="name">Name</label>
          <input
            className="rounded border px-2 py-1"
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <label htmlFor="email">Email</label>
          <input
            className="rounded border px-2 py-1"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <label htmlFor="message">Message</label>

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
