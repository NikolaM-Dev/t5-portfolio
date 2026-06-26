import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Footer } from '#/shared/components/footer';
import { Navbar } from '#/shared/components/navbar';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen flex-col items-center justify-between px-20 py-10">
      <div>
        <header>
          <Navbar />
        </header>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
