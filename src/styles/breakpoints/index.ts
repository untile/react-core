/**
 * Export `breakpoints`.
 */

export const breakpoints = {
  lg: 1200,
  md: 992,
  ms: 768,
  sm: 576,
  xl: 1440,
  xs: 480,
  xxl: 1920,
  xxs: 320
};

/**
 * Export `Breakpoint` type.
 */

export type Breakpoint = keyof typeof breakpoints;
