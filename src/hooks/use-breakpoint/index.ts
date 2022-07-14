/**
 * Module dependencies.
 */

import { Breakpoint, breakpoints } from 'src/styles/breakpoints';
import { useMediaQuery } from 'src/hooks/use-media-query';
import { useMemo } from 'react';

/**
 * `Value` type.
 */

type Value = Breakpoint | number;

/**
 * Export `useBreakpoint` hook.
 */

export function useBreakpoint(min: Value, max?: Value): boolean {
  const query = useMemo(() => {
    const minValue =
      typeof min === 'number' ? min : breakpoints[min as Breakpoint];

    const maxValue =
      typeof max === 'number' ? max : breakpoints[max as Breakpoint];

    const minQuery = `(min-width: ${minValue}px)`;
    const maxQuery = maxValue ? ` and (max-width: ${maxValue}px)` : '';

    return `${minQuery}${maxQuery}`;
  }, [max, min]);

  return useMediaQuery(query);
}
