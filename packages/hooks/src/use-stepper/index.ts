/**
 * Module dependencies.
 */

import { useCallback, useReducer } from 'react';

/**
 * `Steps` type.
 */

type Steps<T> = Array<T>;

/**
 * `StepperProps` type.
 */

type StepperProps<T> = {
  steps: Steps<T>;
};

/**
 * Action types.
 */

const actionTypes = {
  goTo: 'goTo',
  next: 'next',
  previous: 'previous'
} as const;

/**
 * `Action` type.
 */

type Action = 'initial' | 'next' | 'previous';

/**
 * `State` type.
 */

type State<T> = {
  lastAction: Action;
  step: T;
};

/**
 * Export `StepperResult` type.
 */

export type StepperResult<T> = State<T> & {
  goToStep: (step: T) => void;
  isLastStep: boolean;
  nextStep: () => void;
  previousStep: () => void;
  stepIndex: number;
};

/**
 * `ReducerAction` type.
 */

type ReducerAction<T> =
  | {
      payload: null;
      type: typeof actionTypes.next | typeof actionTypes.previous;
    }
  | {
      payload: State<T>;
      type: typeof actionTypes.goTo;
    };

/**
 * Is last step.
 */

function isLastStep<T>(steps: Steps<T>, step: T) {
  return steps.indexOf(step) === steps.length - 1;
}

/**
 * Get last action.
 */

function getLastAction<T>(steps: Steps<T>, currentStep: T, nextStep: T) {
  if (steps.indexOf(currentStep) > steps.indexOf(nextStep)) {
    return actionTypes.previous;
  }

  return actionTypes.next;
}

/**
 * Export `useStepper` hook.
 */

export function useStepper<T = string>(
  props: StepperProps<T>
): StepperResult<T> {
  const { steps } = props;
  const [{ lastAction, step }, dispatch] = useReducer(
    (state: State<T>, action: ReducerAction<T>) => {
      switch (action.type) {
        case actionTypes.next:
          return {
            lastAction: action.type,
            step: steps[steps.indexOf(state.step) + 1] ?? state.step
          };

        case actionTypes.previous:
          return {
            lastAction: action.type,
            step: steps[steps.indexOf(state.step) - 1] ?? state.step
          };

        case actionTypes.goTo:
          return {
            lastAction: action.payload.lastAction,
            step: steps[steps.indexOf(action.payload.step)]
          };

        default:
          return state;
      }
    },
    {
      lastAction: 'initial',
      step: steps[0]
    }
  );

  const nextStep = useCallback(
    () =>
      dispatch({
        payload: null,
        type: actionTypes.next
      }),
    []
  );

  const previousStep = useCallback(
    () =>
      dispatch({
        payload: null,
        type: actionTypes.previous
      }),
    []
  );

  const goToStep = useCallback(
    (nextStep: T) =>
      dispatch({
        payload: {
          lastAction: getLastAction<T>(steps, step, nextStep),
          step: nextStep
        },
        type: actionTypes.goTo
      }),
    [step, steps]
  );

  return {
    goToStep,
    isLastStep: isLastStep<T>(steps, step),
    lastAction,
    nextStep,
    previousStep,
    step,
    stepIndex: steps.indexOf(step)
  };
}
