type AnchorProps = {
  children: React.ReactNode;
  href: string;
};

export function Anchor(props: AnchorProps): React.JSX.Element {
  return (
    <a
      href={props.href}
      className="text-flexoki-magenta-400  visited:text-flexoki-magenta-600"
    >
      {props.children}
    </a>
  );
}
