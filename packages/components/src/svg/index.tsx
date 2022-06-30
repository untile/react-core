/**
 * Module dependencies.
 */

import { ifProp, prop } from 'styled-tools';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

/**
 * Export `SvgProps` interface.
 */

export interface SvgProps {
  className?: string;
  color?: string;
  icon: string;
  size: string | unknown;
}

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.span<Omit<SvgProps, 'icon'>>`
  display: inline-block;
  line-height: 0;
  position: relative;
  width: ${prop('size')};

  ${ifProp(
    'color',
    css`
      color: ${prop('color')};
    `
  )}
`;

/**
 * Export `Svg` component.
 */

export function Svg({ icon, ...rest }: SvgProps) {
  const innerHtml = useMemo(
    () => ({
      __html: icon // eslint-disable-line id-match
    }),
    [icon]
  );

  return (
    <Wrapper
      {...rest}
      dangerouslySetInnerHTML={innerHtml}
    />
  );
}
