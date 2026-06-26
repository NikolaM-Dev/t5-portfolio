import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/$')({
  component: NotFound,
});

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>

      <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
        Go home
      </Link>
    </div>
  );
}
