/**
 * Module dependencies.
 */

import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useScroll } from '.';
 
/**
 * Test `useScroll` hook.
 */
 
describe(`'useScroll' hook`, () => {
  it('should return `true` if horizontal scroll is equal or bigger than 100px', () => {
    const { result } = renderHook(useScroll);

    fireEvent.scroll(window, { target: { scrollX: 200 } });
    expect(result.current.xPos).toBeGreaterThan(100);
  });

  it('should return `false` if horizontal scroll is lower than 100px', () => {
    const { result } = renderHook(useScroll);

    fireEvent.scroll(window, { target: { scrollX: 50 } });
    expect(result.current.xPos).toBeLessThan(100);
  });

  it('should return `true` if vertical scroll is equal or bigger than 100px', () => {
    const { result } = renderHook(useScroll);

    fireEvent.scroll(window, { target: { scrollY: 200 } });
    expect(result.current.yPos).toBeGreaterThan(100);
  });

  it('should return `false` if vertical scroll is lower than 100px', () => {
    const { result } = renderHook(useScroll);

    fireEvent.scroll(window, { target: { scrollY: 50 } });
    expect(result.current.yPos).toBeLessThan(100);
  });
});
