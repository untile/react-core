/**
 * Module dependencies.
 */

import { RawHtml } from './';
import { render } from '@testing-library/react';
import React from 'react';

/**
 * Test `RawHtml` component.
 */

describe(`'RawHtml' component`, () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<RawHtml>{'foo<br>bar'}</RawHtml>);

    expect(asFragment()).toMatchSnapshot();
  });
});
