/**
 * Module dependencies.
 */

import { useEffect } from 'react';

/**
 * Export `useBodyScroll` hook.
 */

export function useBodyScroll({ off }: { off: boolean }) {
  useEffect(() => {
    const body = document.body;

    if (!body || !off) {
      return;
    }

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = '';
    };
  }, [off]);
}
