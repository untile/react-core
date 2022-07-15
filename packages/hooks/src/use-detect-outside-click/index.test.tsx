/**
 * Module dependencies.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { useDetectOutsideClick } from './';
import React, { useRef } from 'react';

/**
 * `Mock` component.
 */

const Mock = ({ initiallyActive }: { initiallyActive?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useDetectOutsideClick(ref, initiallyActive);

  return (
    <>
      <div
        onClick={() => setActive(true)}
        ref={ref}
      >
        {active ? 'active' : 'inactive'}
      </div>

      <div>{'outside'}</div>
    </>
  );
};

/**
 * Test `useDetectOutsideClick` hook.
 */

describe(`'useDetectOutsideClick' hook`, () => {
  it('should lose focus', () => {
    render(<Mock initiallyActive />);

    expect(screen.queryByText('active')).toBeTruthy();

    fireEvent.click(screen.getByText('outside'));

    expect(screen.queryByText('inactive')).toBeTruthy();
  });

  it('should gain focus', () => {
    render(<Mock />);

    expect(screen.queryByText('inactive')).toBeTruthy();

    fireEvent.click(screen.getByText('inactive'));

    expect(screen.queryByText('active')).toBeTruthy();
  });

  it('should keep focused', () => {
    render(<Mock initiallyActive />);

    expect(screen.queryByText('active')).toBeTruthy();

    fireEvent.click(screen.getByText('active'));

    expect(screen.queryByText('active')).toBeTruthy();
  });

  it('should keep unfocused', () => {
    render(<Mock />);

    expect(screen.queryByText('inactive')).toBeTruthy();

    fireEvent.click(screen.getByText('outside'));

    expect(screen.queryByText('inactive')).toBeTruthy();
  });
});
