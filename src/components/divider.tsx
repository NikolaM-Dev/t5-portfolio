import cn from 'cnfast';

type DividerProps = {} & React.HTMLAttributes<HTMLHRElement>;

export function Divider(props: DividerProps): React.JSX.Element {
  const { className, ...restProps } = props;

  return <hr className={cn('text-flexoki-600', className)} {...restProps} />;
}
