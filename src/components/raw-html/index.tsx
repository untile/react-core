/**
 * Module dependencies.
 */

import { ReactNode, createElement } from 'react';

/**
 * Export `RawHtmlProps` interface.
 */

export interface RawHtmlProps {
  children: ReactNode;
  className?: string;
  element?: string;
}

/**
 * Export `RawHtml` component.
 */

export function RawHtml(props: RawHtmlProps) {
  const { children, element, ...rest } = props;

  return createElement(element ?? 'span', {
    ...rest,
    dangerouslySetInnerHTML: { __html: children } // eslint-disable-line id-match
  });
}
