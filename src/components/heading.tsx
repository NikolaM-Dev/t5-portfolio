import { cva, type VariantProps } from 'class-variance-authority';
import cn from 'cnfast';

enum HeadingLevel {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

const headingVariables = cva('font-bold text-flexoki-cyan-500 my-4', {
  variants: {
    level: {
      [HeadingLevel.H1]: 'text-4xl my-0',
      [HeadingLevel.H2]: 'text-3xl',
      [HeadingLevel.H3]: 'text-2xl',
      [HeadingLevel.H4]: 'text-xl',
      [HeadingLevel.H5]: 'text-lg',
      [HeadingLevel.H6]: 'text-base',
    },
  },
  defaultVariants: {
    level: HeadingLevel.H1,
  },
});

type HeadingProps = {
  level: HeadingLevel;
} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariables>;

export function Heading(props: HeadingProps): React.JSX.Element {
  const { children, level, className, ...restProps } = props;

  const HEADINGS = {
    [HeadingLevel.H1]: (
      <h1 className={cn(headingVariables({ level, className }))} {...restProps}>
        {children}
      </h1>
    ),
    [HeadingLevel.H2]: (
      <h2 className={cn(headingVariables({ level, className }))} {...restProps}>
        {children}
      </h2>
    ),
    [HeadingLevel.H3]: (
      <h3 className={cn(headingVariables({ level, className }))} {...restProps}>
        {children}
      </h3>
    ),
    [HeadingLevel.H4]: (
      <h4 className={cn(headingVariables({ level, className }))} {...restProps}>
        {children}
      </h4>
    ),
    [HeadingLevel.H5]: (
      <h5 className={cn(headingVariables({ level, className }))} {...restProps}>
        {children}
      </h5>
    ),
    [HeadingLevel.H6]: (
      <h6 className={cn(headingVariables({ level, className }))} {...restProps}>
        {children}
      </h6>
    ),
  };

  return HEADINGS[level];
}
