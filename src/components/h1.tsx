import cn from 'cnfast';

type H1Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function H1(props: H1Props): React.JSX.Element {
  const { children, className, ...restProps } = props;

  return (
    <h1
      className={cn('text-4xl font-bold text-flexoki-cyan-500', className)}
      {...restProps}
    >
      {children}
    </h1>
  );
}
