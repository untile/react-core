/**
 * Module dependencies.
 */

import { useCallback, useState } from 'react';

/**
 * Export `useToggle` hook.
 */

export function useToggle(initialState = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
}
