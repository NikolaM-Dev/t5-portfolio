import { NLink } from '#/components/nlink';

export function Navbar(): React.JSX.Element {
  return (
    <>
      <nav className="flex flex-col justify-center gap-4 md:flex-row">
        <NLink to="/">Home</NLink>
        <NLink to="/projects">Projects</NLink>
        <NLink to="/about">About</NLink>
        <NLink to="/contact">Contact</NLink>
      </nav>
    </>
  );
}
