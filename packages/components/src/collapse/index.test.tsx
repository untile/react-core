/**
 * Module dependencies.
 */

import { Collapse } from './';
import { render } from '@testing-library/react';
import React from 'react';

/**
 * Test `Collapse` component.
 */

describe(`'Collapse' component`, () => {
  it('matches snapshot when closed', () => {
    const { asFragment } = render(<Collapse>{'content'}</Collapse>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when opened', () => {
    const { asFragment } = render(<Collapse isOpen>{'content'}</Collapse>);

    expect(asFragment()).toMatchSnapshot();
  });
});
