export function Footer(): React.JSX.Element {
  return (
    <footer className="flex justify-center">
      ©️ All rights reserved - {new Date().getFullYear()}
    </footer>
  );
}
