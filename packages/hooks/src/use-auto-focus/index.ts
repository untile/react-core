/**
 * Module dependencies.
 */

import { RefObject, useEffect } from 'react';

/**
 * Export `useAutoFocus` hook.
 */

export function useAutoFocus(
  ref: RefObject<HTMLElement> | null | undefined,
  shouldFocus = true,
  delay?: number,
  onFocus?: () => void
): void {
  useEffect(() => {
    if (
      !shouldFocus ||
      !ref?.current?.focus ||
      document.activeElement === ref?.current
    ) {
      return;
    }

    const savedRef = ref;
    const timeout = setTimeout(() => {
      savedRef?.current?.focus?.();

      const scrollElement = document.scrollingElement as HTMLElement;

      if (scrollElement) {
        const { scrollLeft, scrollTop } = scrollElement;

        scrollElement.scrollTo(scrollLeft, scrollTop);
      }

      if (onFocus) {
        onFocus();
      }
    }, delay ?? 0);

    return () => {
      clearTimeout(timeout);
      savedRef?.current?.blur?.();
    };
  }, [delay, onFocus, ref, shouldFocus]);
}
