/**
 * Module dependencies.
 */

import { media } from '.';
import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div`
  ${media.min.xl`
    background-color: red;
  `}
`;

/**
 * Test `svgBackground` style util.
 */

describe(`'media' style util`, () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Wrapper />);

    expect(asFragment()).toMatchSnapshot();
  });
});
