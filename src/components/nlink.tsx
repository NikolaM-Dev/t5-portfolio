import { createLink, type LinkComponent } from '@tanstack/react-router';
import cn from 'cnfast';
import * as React from 'react';

type NLinkProps = {
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const CustomLinkComponent = React.forwardRef<HTMLAnchorElement, NLinkProps>(
  (props, ref) => {
    const { className, ...restProps } = props;

    return (
      <a
        ref={ref}
        className={cn(
          'text-flexoki-yellow-700 hover:underline dark:text-flexoki-yellow-400',
          className,
        )}
        {...restProps}
      />
    );
  },
);

const CreatedLinkComponent = createLink(CustomLinkComponent);

export const NLink: LinkComponent<typeof CustomLinkComponent> = (props) => {
  return (
    <CreatedLinkComponent
      preload={'intent'}
      activeProps={{ className: 'font-bold' }}
      {...props}
    />
  );
};
