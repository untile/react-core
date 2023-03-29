/**
 * Module dependencies.
 */

import 'jest-styled-components';
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

  it('contain a style rule `background-image` with a rendered svg', () => {
    const { getByTestId } = render(<Wrapper data-testid={'wrapper'} />);

    expect(getByTestId('wrapper')).toHaveStyleRule(
      'background-image',
      `url('data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%20120%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2250%22%2F%3E%3C%2Fsvg%3E')`
    );
  });
});
