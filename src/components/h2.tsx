import cn from 'cnfast';

type H2Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function H2(props: H2Props): React.JSX.Element {
  const { children, className, ...restProps } = props;
  return (
    <h2
      className={cn('my-4 text-3xl font-bold text-flexoki-cyan-500', className)}
      {...restProps}
    >
      {children}
    </h2>
  );
}
