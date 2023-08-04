/**
 * Module dependencies.
 */

import { prop } from 'styled-tools';
import React, { ComponentPropsWithRef, forwardRef, useMemo } from 'react';
import styled from 'styled-components';

/**
 * Export `SvgProps` interface.
 */

export type SvgProps = ComponentPropsWithRef<'span'> & {
  color?: string;
  icon: string | TrustedHTML;
  size?: string;
};

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.span.withConfig({
  shouldForwardProp: prop => !['color', 'size'].includes(prop)
})<Omit<SvgProps, 'icon'>>`
  color: ${prop('color', 'currentColor')};
  display: inline-block;
  line-height: 0;
  position: relative;
  width: ${prop('size')};
`;

/**
 * Export `Svg` component.
 */

export const Svg = forwardRef<HTMLSpanElement, SvgProps>((props, ref) => {
  const { icon, ...rest } = props;
  const innerHtml = useMemo(
    () => ({
      __html: icon // eslint-disable-line id-match
    }),
    [icon]
  );

  return <Wrapper {...rest} dangerouslySetInnerHTML={innerHtml} ref={ref} />;
});

/**
 * Display name.
 */

Svg.displayName = 'Svg';
