import { Link } from '@tanstack/react-router';

export function Navbar(): React.JSX.Element {
  return (
    <>
      <nav className="flex flex-col justify-center  gap-4 md:flex-row">
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
