/**
 * Module dependencies.
 */

import { render } from '@testing-library/react';
import { useAutoFocus } from './';
import React, { useRef } from 'react';

/**
 * `Props` type.
 */

type Props = {
  delay?: number;
  shouldFocus?: boolean;
};

/**
 * `Mock` component.
 */

const Mock = ({ delay, shouldFocus = true }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useAutoFocus(ref, shouldFocus, delay);

  return (
    <input
      placeholder={'focus'}
      ref={ref}
    />
  );
};

/**
 * Test `useAutoFocus` hook.
 */

describe(`'useAutoFocus' hook`, () => {
  it('should focus the element', async () => {
    const { getByPlaceholderText } = render(<Mock />);
    const input = getByPlaceholderText('focus');

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(document.activeElement === input).toBeTruthy();
  });

  it('should not focus the element', async () => {
    const { getByPlaceholderText } = render(<Mock shouldFocus={false} />);
    const input = getByPlaceholderText('focus');

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(document.activeElement !== input).toBeTruthy();
  });

  it('should focus the element after 500ms', async () => {
    const { getByPlaceholderText } = render(<Mock delay={500} />);
    const input = getByPlaceholderText('focus');

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(document.activeElement !== input).toBeTruthy();

    await new Promise(resolve => setTimeout(resolve, 400));

    expect(document.activeElement === input).toBeTruthy();
  });

  it('should not focus the element after 500ms', async () => {
    const { getByPlaceholderText } = render(<Mock delay={1000} />);
    const input = getByPlaceholderText('focus');

    await new Promise(resolve => setTimeout(resolve, 500));

    expect(document.activeElement !== input).toBeTruthy();
  });
});
