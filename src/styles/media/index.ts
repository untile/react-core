/**
 * Module dependencies,
 */

import { Breakpoint, breakpoints } from '../breakpoints';
import { FlattenSimpleInterpolation, css } from 'styled-components';

/**
 * `CssArgs` type.
 */

type CssArgs = TemplateStringsArray | [<Props>(props?: Props) => any] | [];

/**
 * `Media` type.
 */

type Media = Record<
  'min' | 'max',
  Record<
    Breakpoint,
    (
      styles: TemplateStringsArray,
      ...interpolations: CssArgs
    ) => FlattenSimpleInterpolation
  >
>;

/**
 * Render query.
 */

function renderQuery(orientation: string, value: number) {
  return (styles: TemplateStringsArray, ...interpolations: CssArgs) =>
    css`
      @media (${orientation}: ${value}px) {
        ${css(styles, ...interpolations)}
      }
      /* stylelint-disable-next-line no-eol-whitespace */
    `;
}

/**
 * `initialQueries` constant.
 */

const initialQueries = {
  max: {},
  min: {}
} as const;

/**
 * Export `media` util.
 */

export const media = (Object.entries(breakpoints) as any).reduce(
  (queries: typeof initialQueries, [key, value]: [Breakpoint, number]) => ({
    max: {
      ...queries.max,
      [key]: renderQuery('max-width', value - 1)
    },
    min: {
      ...queries.min,
      [key]: renderQuery('min-width', value)
    }
  }),
  initialQueries
) as Media;
