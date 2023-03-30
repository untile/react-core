/**
 * Module dependencies.
 */

import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { svgBackground } from '.';
import React from 'react';
import styled from 'styled-components';

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div`
  ${svgBackground(
    '<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50"/></svg>'
  )}
`;

/**
 * Test `svgBackground` style util.
 */

describe(`'svgBackground' style util`, () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Wrapper />);

    expect(asFragment()).toMatchSnapshot();
  });
});
