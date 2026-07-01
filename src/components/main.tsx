import cn from 'cnfast';

type MainProps = {} & React.HTMLAttributes<HTMLElement>;

export function Main(props: MainProps): React.JSX.Element {
  const { className, children } = props;

  return <main className={cn('py-8', className)}>{children}</main>;
}
