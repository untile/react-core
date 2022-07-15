/**
 * Module dependencies.
 */

import { Reducer, useCallback, useEffect, useReducer, useRef } from 'react';

/**
 * Export `DispatchWithCallback` type.
 */

export type DispatchWithCallback<State, Action> = (
  action: Action,
  callback?: (state: State) => void
) => void;

/**
 * `Return` type.
 */

type Return<State, Action> = [State, DispatchWithCallback<State, Action>];

/**
 * Export `useReducerWithCallback` hook.
 */

export function useReducerWithCallback<State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State
): Return<State, Action> {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  const callbackRef = useRef<((state: State) => void) | null>(null);
  const dispatchWithCallback = useCallback(
    (action: Action, callback?: (state: State) => void) => {
      callbackRef.current = callback ?? null;

      return dispatch(action);
    },
    []
  );

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);

      callbackRef.current = null;
    }
  }, [state]);

  return [state, dispatchWithCallback];
}
