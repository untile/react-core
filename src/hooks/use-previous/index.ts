/**
 * Module dependencies.
 */

import { useEffect, useRef } from 'react';

/**
 * Export `usePrevious` hook.
 */

export function usePrevious<T = any>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
