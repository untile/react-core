/**
 * Module dependencies.
 */

import AnimateHeight from 'react-animate-height';
import React, { ReactNode, useMemo } from 'react';

/**
 * Export `CollapseProps` interface.
 */

export interface CollapseProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  initialHeight: number;
  isOpen?: boolean;
}

/**
 * Export `Collapse` component.
 */

export function Collapse(props: CollapseProps) {
  const { children, initialHeight, isOpen, ...rest } = props;
  const height = useMemo(() => {
    return isOpen ? 'auto' : initialHeight;
  }, [initialHeight, isOpen]);

  return (
    <AnimateHeight
      height={height}
      {...rest}
    >
      {children}
    </AnimateHeight>
  );
}

/**
 * Default props.
 */

Collapse.defaultProps = {
  duration: 500,
  initialHeight: 0
};
