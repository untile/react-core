/**
 * Module dependencies.
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useWhatChanged } from './';

/**
 * Test `useWhatChanged` hook.
 */

describe(`'useWhatChanged' hook`, () => {
  it('should detect which dependencies triggered a `useEffect`', () => {
    const { result } = renderHook(() => {
      const [stateA, setStateA] = useState(0);
      const [stateB, setStateB] = useState(0);
      const changedProps = useWhatChanged({ stateA, stateB });

      return { changedProps, setStateA, setStateB };
    });

    const inc = (state: number) => state + 1;

    expect(result.current.changedProps).toEqual({});

    act(() => {
      result.current.setStateA(inc);
    });

    expect(result.current.changedProps).toEqual({ stateA: [0, 1] });

    act(() => {
      result.current.setStateA(inc);
    });

    expect(result.current.changedProps).toEqual({ stateA: [1, 2] });

    act(() => {
      result.current.setStateB(inc);
    });

    expect(result.current.changedProps).toEqual({ stateB: [0, 1] });

    act(() => {
      result.current.setStateA(inc);
    });

    expect(result.current.changedProps).toEqual({ stateA: [2, 3] });

    act(() => {
      result.current.setStateA(inc);
      result.current.setStateB(inc);
    });

    expect(result.current.changedProps).toEqual({
      stateA: [3, 4],
      stateB: [1, 2]
    });

    act(() => {
      result.current.setStateB(inc);
    });

    expect(result.current.changedProps).toEqual({ stateB: [2, 3] });
  });
});
