type mainProps = {
  children: React.ReactNode;
};

export function Main({ children }: mainProps): React.JSX.Element {
  return <main className="py-8">{children}</main>;
}
