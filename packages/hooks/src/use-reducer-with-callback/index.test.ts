/**
 * Module dependencies.
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { useReducerWithCallback } from './';

/**
 * Mock reducer `State` type.
 */

type State = {
  bar: number;
  foo: number;
};

/**
 * Mock reducer `Action` type.
 */

type Action = 'incFoo' | 'incBar' | 'decFoo' | 'doubleBar';

/**
 * Mock reducer.
 */

const reducer = (state: State, action: Action) => {
  switch (action) {
    case 'incFoo':
      return { ...state, foo: state.foo + 1 };

    case 'incBar':
      return { ...state, bar: state.bar + 1 };

    case 'decFoo':
      return { ...state, foo: state.foo - 1 };

    case 'doubleBar':
      return { ...state, bar: state.bar * 2 };

    default:
      return state;
  }
};

/**
 * Test `useReducerWithCallback` hook.
 */

describe(`'useReducerWithCallback' hook`, () => {
  it('should run the callback after the dispatch', () => {
    const { result } = renderHook(() => {
      const [state, dispatchWithCallback] = useReducerWithCallback<
        State,
        Action
      >(reducer, { bar: 0, foo: 0 });

      return { dispatchWithCallback, state };
    });

    act(() => {
      result.current.dispatchWithCallback('incBar', () => {
        // Unlike the next assertion, this one only runs after the dispatch
        expect(result.current.state).toEqual({ bar: 1, foo: 0 });
      });

      // This assertion runs in the same render as the dispatch, and as such the state has not been updated yet
      expect(result.current.state).toEqual({ bar: 0, foo: 0 });
    });

    act(() => {
      result.current.dispatchWithCallback('doubleBar', () => {
        expect(result.current.state).toEqual({ bar: 2, foo: 0 });
      });

      expect(result.current.state).toEqual({ bar: 1, foo: 0 });
    });

    act(() => {
      result.current.dispatchWithCallback('decFoo', () => {
        expect(result.current.state).toEqual({ bar: 2, foo: -1 });
      });

      expect(result.current.state).toEqual({ bar: 2, foo: 0 });
    });
  });
});
