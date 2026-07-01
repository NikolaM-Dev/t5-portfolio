import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Footer, Divider, Navbar, ThemeToggle } from '#/components';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen flex-col justify-between px-10 py-5 md:m-auto md:max-w-4xl">
      <section>
        <header className="flex flex-col justify-between gap-4 md:flex-row">
          <Navbar />

          <ThemeToggle />
        </header>

        <Divider />
        <Outlet />
      </section>

      <section>
        <Divider />
        <Footer />
      </section>
    </div>
  );
}
