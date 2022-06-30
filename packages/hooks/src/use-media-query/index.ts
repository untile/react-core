/**
 * Module dependencies.
 */

import { useEffect, useState } from 'react';

/**
 * Export `useMediaQuery` hook.
 */

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    setMatches(media.matches);
  }, [query]);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addListener(listener);

    return () => {
      media.removeListener(listener);
    };
  }, [query]);

  return matches;
}
