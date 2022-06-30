/**
 * Module dependencies.
 */

import { css } from 'styled-components';

/**
 * Export `svgBackground`.
 */

export const svgBackground = (svg: string) => css`
  background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}');
`;
