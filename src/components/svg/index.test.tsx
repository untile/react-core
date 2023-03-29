/**
 * Module dependencies.
 */

import { Svg } from './';
import { render } from '@testing-library/react';
import React from 'react';

/**
 * Test `Svg` component.
 */

describe(`'Svg' component`, () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Svg
        icon={`
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M12.793 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.086 7H12.5C8.952 7 6 9.952 6 13.5S8.952 20 12.5 20s6.5-2.952 6.5-6.5a1 1 0 1 1 2 0c0 4.652-3.848 8.5-8.5 8.5S4 18.152 4 13.5 7.848 5 12.5 5h1.586l-1.293-1.293a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"/>
          </svg>
        `}
        size={'20px'}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
