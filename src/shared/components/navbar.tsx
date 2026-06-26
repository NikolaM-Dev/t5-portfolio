import { Link } from '@tanstack/react-router';

export function Navbar(): React.JSX.Element {
  return (
    <>
      <nav className="flex gap-4 py-4 sm:justify-center">
        <Link
          activeProps={{
            className: 'font-bold',
          }}
          className="hover:underline"
          to="/"
        >
          Home
        </Link>

        <Link
          activeProps={{
            className: 'font-bold',
          }}
          className="hover:underline"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          activeProps={{
            className: 'font-bold',
          }}
          className="hover:underline"
          to="/about"
        >
          About
        </Link>

        <Link
          activeProps={{
            className: 'font-bold',
          }}
          className="hover:underline"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
