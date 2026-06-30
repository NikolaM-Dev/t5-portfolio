import cn from 'cnfast';

type LabelProps = {} & React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label(props: LabelProps): React.JSX.Element {
  const { className, children, ...restProps } = props;
  return (
    <label
      className={cn('font-semibold text-flexoki-blue-400', className)}
      {...restProps}
    >
      {children}
    </label>
  );
}
