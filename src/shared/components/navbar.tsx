import { Link } from '@tanstack/react-router';

export function Navbar(): React.JSX.Element {
  return (
    <>
      <nav className="flex justify-center gap-4">
        <Link
          activeProps={{
            className: 'underline',
          }}
          className="text-muted-foreground hover:text-foreground"
          to="/"
        >
          Home
        </Link>

        <Link
          activeProps={{
            className: 'underline',
          }}
          className="text-muted-foreground hover:text-foreground"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          activeProps={{
            className: 'underline',
          }}
          className="text-muted-foreground hover:text-foreground"
          to="/about"
        >
          About
        </Link>

        <Link
          activeProps={{
            className: 'underline',
          }}
          className="text-muted-foreground hover:text-foreground"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
