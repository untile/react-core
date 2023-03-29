/**
 * Module dependencies.
 */

import { GlobalStyle } from '.';
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
