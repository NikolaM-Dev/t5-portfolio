export function Footer(): React.JSX.Element {
  return (
    <footer className="flex justify-center py-4">
      ©️ All rights reserved - {new Date().getFullYear()}
    </footer>
  );
}
