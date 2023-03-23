/**
 * Module dependencies.
 */

import { act, renderHook } from '@testing-library/react-hooks/dom';
import { useDelayedState } from './';
import { useState } from 'react';

/**
 * Test `useDelayedState` hook.
 */

describe(`'useDelayedState' hook`, () => {
  it('should match the initial state', () => {
    const { result } = renderHook(() => useDelayedState(true));

    expect(result.current).toBe(true);
  });

  it('should transition correctly', () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(true);

      return [useDelayedState(state), setState] as const;
    });

    const [delayedState, setState] = result.current;

    expect(delayedState).toBe(true);

    act(() => setState(false))
    expect(delayedState).toBe(true);

    setTimeout(() => {
      expect(delayedState).toBe(true);
    }, 200);

    setTimeout(() => {
      expect(delayedState).toBe(false);
    }, 400);
  });

  it('should work with a custom comparator', () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState({ foo: 'bar', id: 1234 });


      return [useDelayedState(state, { comparator: (first, second) => first.id === second.id }), setState] as const;
    });

    const [delayedState, setState] = result.current;

    expect(delayedState).toStrictEqual({ foo: 'bar', id: 1234 });

    act(() => setState({ foo: 'biz', id: 1234 }));

    setTimeout(() => {
      expect(delayedState).toStrictEqual({ foo: 'bar', id: 1234 });
    }, 400);

    act(() => setState({ foo: 'biz', id: 4321 }));

    setTimeout(() => {
      expect(delayedState).toStrictEqual({ foo: 'biz', id: 4321 });
    }, 400);
  });
});
