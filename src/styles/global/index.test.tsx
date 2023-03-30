/**
 * Module dependencies.
 */

import { GlobalStyle } from '.';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

/**
 * Test `Global` component.
 */

describe(`'Global' component`, () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<GlobalStyle />);

    expect(asFragment()).toMatchSnapshot();
  });
});
