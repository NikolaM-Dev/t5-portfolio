import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Footer } from '#/shared/components/footer';
import { Navbar } from '#/shared/components/navbar';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen flex-col justify-between px-10 py-5 md:m-auto md:max-w-4xl">
      <section>
        <header>
          <Navbar />
        </header>
        <hr />
        <Outlet />
      </section>

      <section>
        <hr />
        <Footer />
      </section>
    </div>
  );
}
