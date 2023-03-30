/**
 * Module dependencies.
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';
import { useToggle } from './';

/**
 * Test `useToggle` hook.
 */

describe(`'useToggle' hook`, () => {
  it('should toggle correctly', () => {
    const { result } = renderHook(() => {
      const [state, toggle] = useToggle();

      return { state, toggle };
    });

    expect(result.current.state).toBe(false);

    act(result.current.toggle);
    expect(result.current.state).toBe(true);

    act(result.current.toggle);
    expect(result.current.state).toBe(false);
  });
});
