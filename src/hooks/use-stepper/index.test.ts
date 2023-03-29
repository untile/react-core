/**
 * Module dependencies.
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { useStepper } from './';

const getSteps = (maxSteps: number) =>
  [...Array(maxSteps).keys()].map(index => `step-${index}`);

/**
 * Stepper hook.
 */

describe('`useStepper` hook', () => {
  describe('nextStep', () => {
    it('should advance to next step', () => {
      const { result } = renderHook(() => useStepper({ steps: getSteps(5) }));

      expect(result.current.step).toEqual('step-0');
      expect(result.current.stepIndex).toEqual(0);
      expect(result.current.lastAction).toEqual('initial');
      expect(result.current.isLastStep).toEqual(false);

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.step).toEqual('step-1');
      expect(result.current.stepIndex).toEqual(1);
      expect(result.current.lastAction).toEqual('next');
      expect(result.current.isLastStep).toEqual(false);
    });

    it('should stay at the last step', () => {
      const { result } = renderHook(() => useStepper({ steps: getSteps(2) }));

      act(() => {
        result.current.nextStep();
        result.current.nextStep();
      });

      expect(result.current.step).toEqual('step-1');
      expect(result.current.stepIndex).toEqual(1);
      expect(result.current.lastAction).toEqual('next');
      expect(result.current.isLastStep).toEqual(true);
    });
  });

  describe('previousStep', () => {
    it('should go back to previous step', () => {
      const { result } = renderHook(() => useStepper({ steps: getSteps(5) }));

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.step).toEqual('step-1');
      expect(result.current.stepIndex).toEqual(1);
      expect(result.current.lastAction).toEqual('next');
      expect(result.current.isLastStep).toEqual(false);

      act(() => {
        result.current.previousStep();
      });

      expect(result.current.step).toEqual('step-0');
      expect(result.current.stepIndex).toEqual(0);
      expect(result.current.lastAction).toEqual('previous');
      expect(result.current.isLastStep).toEqual(false);
    });

    it('should stay in the first step', () => {
      const { result } = renderHook(() => useStepper({ steps: getSteps(5) }));

      act(() => {
        result.current.previousStep();
        result.current.previousStep();
      });

      expect(result.current.step).toEqual('step-0');
      expect(result.current.stepIndex).toEqual(0);
      expect(result.current.lastAction).toEqual('previous');
      expect(result.current.isLastStep).toEqual(false);
    });
  });

  describe('goToStep', () => {
    it('should jump to an arbitrary step', () => {
      const { result } = renderHook(() => useStepper({ steps: getSteps(5) }));

      act(() => {
        result.current.goToStep('step-4');
      });

      expect(result.current.step).toEqual('step-4');
      expect(result.current.stepIndex).toEqual(4);
      expect(result.current.lastAction).toEqual('next');
      expect(result.current.isLastStep).toEqual(true);

      act(() => {
        result.current.goToStep('step-2');
      });

      expect(result.current.step).toEqual('step-2');
      expect(result.current.stepIndex).toEqual(2);
      expect(result.current.lastAction).toEqual('previous');
      expect(result.current.isLastStep).toEqual(false);
    });
  });
});
