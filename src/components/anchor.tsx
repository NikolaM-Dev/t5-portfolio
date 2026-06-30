import cn from 'cnfast';

type AnchorProps = {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Anchor(props: AnchorProps): React.JSX.Element {
  const { children, className, ...restProps } = props;
  return (
    <a
      className={cn(
        'font-bold text-flexoki-magenta-400  visited:text-flexoki-magenta-600',
        className,
      )}
      {...restProps}
    >
      {children}
    </a>
  );
}
