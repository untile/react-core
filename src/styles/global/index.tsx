/**
 * Module dependencies.
 */

import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

/**
 * Export `GlobalStyle` component.
 */

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: 700;
  }

  button,
  [role='button'] {
    appearance: none;
    cursor: pointer;
  }

  ol,
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  svg {
    display: block;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    appearance: none !important;
    background: none !important;
    background-color: transparent !important;
    transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
  }
`;
