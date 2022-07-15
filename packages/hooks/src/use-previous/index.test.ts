/**
 * Module dependencies.
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { usePrevious } from './';
import { useState } from 'react';

/**
 * Test `usePrevious` hook.
 */

describe(`'usePrevious' hook`, () => {
  it('should match the previous state', () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState('initial');
      const previousState = usePrevious(state);

      return { previousState, setState, state };
    });

    expect(result.current.previousState).toBe(undefined);
    expect(result.current.state).toBe('initial');

    act(() => {
      result.current.setState('updated');
    });

    expect(result.current.previousState).toBe('initial');
    expect(result.current.state).toBe('updated');

    act(() => {
      result.current.setState('updatedAgain');
    });

    expect(result.current.previousState).toBe('updated');
    expect(result.current.state).toBe('updatedAgain');
  });
});
